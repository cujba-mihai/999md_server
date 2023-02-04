import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsResolver } from './regions.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Locations,
  LocationsSchema,
} from '../locations/entity/locations.entity';
import { Regions, RegionsSchema } from './entity/regions.entity';
import { LocationsModule } from '../locations/locations.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Locations.name, schema: LocationsSchema },
      { name: Regions.name, schema: RegionsSchema },
    ]),
    LocationsModule,
  ],
  providers: [RegionsResolver, RegionsService],
  exports: [RegionsResolver, RegionsService],
})
export class RegionsModule {}
