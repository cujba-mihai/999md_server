import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsResolver } from './locations.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Locations, LocationsSchema } from './entity/locations.entity';
import { Regions, RegionsSchema } from '../regions/entity/regions.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Locations.name, schema: LocationsSchema },
      { name: Regions.name, schema: RegionsSchema },
    ]),
  ],
  providers: [LocationsResolver, LocationsService],
  exports: [LocationsResolver, LocationsService],
})
export class LocationsModule {}
