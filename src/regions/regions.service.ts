import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Locations,
  LocationsDocument,
} from '../locations/entity/locations.entity';
import { CreateRegionDTO } from './dto/create-region.dto';
import { CreateRegionsDTO } from './dto/create-regions.dto';
import { FindRegionDTO } from './dto/find-region.dto';
import { Regions, RegionsDocument } from './entity/regions.entity';

@Injectable()
export class RegionsService {
  constructor(
    @InjectModel(Locations.name)
    private locationsModel: Model<LocationsDocument>,

    @InjectModel(Regions.name)
    private regionsModel: Model<RegionsDocument>,
  ) {}

  async findRegion({ region }: FindRegionDTO) {
    return await this.regionsModel.find({ region }).exec();
  }

  async findAll() {
    const regions = await this.regionsModel.find().populate('locations').exec();

    return regions;
  }

  async removeAllRegions() {
    try {
      await this.regionsModel.deleteMany({}).exec();

      return true;
    } catch (err) {
      return false;
    }
  }

  async createRegionWithLocations(
    regionDTO: CreateRegionDTO,
  ): Promise<RegionsDocument> {
    const locations = await Promise.all(
      regionDTO.locations.map(async (location) => {
        return await this.locationsModel.create(location);
      }),
    );

    const region = {
      region: regionDTO.region,
      locations,
    };

    const createdRegion = await this.regionsModel.create(region);

    return createdRegion;
  }

  async createRegionsWithLocations(regionsDTO: CreateRegionsDTO) {
    return await Promise.all(
      regionsDTO.regions.map(async (region) => {
        return await this.createRegionWithLocations(region);
      }),
    );
  }
}
