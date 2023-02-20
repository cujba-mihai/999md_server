import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { Region, RegionSchema } from './entity/region.entity';
import { LocationModule } from '../location/location.module';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';
import { RegionDTO } from './dto/region.dto';

const nestjsQueryMongooseModule = NestjsQueryMongooseModule.forFeature([
  {
    document: Region,
    name: Region.name,
    schema: RegionSchema,
  },
]);

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [nestjsQueryMongooseModule, LocationModule],
      services: [RegionService],
      resolvers: [
        {
          DTOClass: RegionDTO,
          EntityClass: Region,
          ServiceClass: RegionService,
        },
      ],
    }),
    nestjsQueryMongooseModule,
  ],
  exports: [nestjsQueryMongooseModule],
})
export class RegionModule {}
