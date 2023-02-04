import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Locations, LocationsDocument } from './entity/locations.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Locations.name)
    private locationsModel: Model<LocationsDocument>,
  ) {}
}
