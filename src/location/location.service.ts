import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Region, RegionDocument } from '../region/entity/region.entity';
import { Location, LocationDocument } from './entity/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name)
    private locationModel: Model<LocationDocument>,

    @InjectModel(Region.name)
    private regionModel: Model<RegionDocument>,
  ) {}
}
