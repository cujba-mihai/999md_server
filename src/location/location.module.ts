import { Module } from '@nestjs/common';
import { Location, LocationSchema } from './entity/location.entity';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';
import { LocationDTO } from './dto/location.dto';
import { CreateLocationDTO } from './dto/create-location.dto';

const nestjsQueryMongooseModule = NestjsQueryMongooseModule.forFeature([
  {
    document: Location,
    name: Location.name,
    schema: LocationSchema,
  },
]);

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [nestjsQueryMongooseModule],
      resolvers: [
        {
          DTOClass: LocationDTO,
          CreateDTOClass: CreateLocationDTO,
          EntityClass: Location,
        },
      ],
    }),
    nestjsQueryMongooseModule,
  ],
  exports: [nestjsQueryMongooseModule],
})
export class LocationModule {}
