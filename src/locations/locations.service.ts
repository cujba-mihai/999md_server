import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Regions, RegionsDocument } from '../regions/entity/regions.entity';
import { CreateLocationInput } from './dto/createLocation.dto';
import { Locations, LocationsDocument } from './entity/locations.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Locations.name)
    private locationsModel: Model<LocationsDocument>,

    @InjectModel(Regions.name)
    private regionsModel: Model<RegionsDocument>,
  ) {}
  async createLocation(createLocation: CreateLocationInput) {
    const region = await this.regionsModel
      .find({ id: createLocation.region })
      .exec();

    if (!region)
      throw new Error(`Region ${createLocation.region} does not exist.`);

    const location = await this.locationsModel.create({
      region,
      location: createLocation.location,
      sector: createLocation.sector,
    });

    return location;
  }

  async createLocations(
    createLocations: CreateLocationInput[],
  ): Promise<Locations[]> {
    return await Promise.all(
      createLocations.map(async (location) => {
        return this.createLocation(location);
      }),
    );
  }
}
