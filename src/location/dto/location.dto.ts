import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  KeySet,
  Relation,
} from '@ptc-org/nestjs-query-graphql';
import { Types } from 'mongoose';
import { RegionDTO } from '~server/src/region/dto/region.dto';
import { Region } from '~server/src/region/entity/region.entity';

@InputType('LocationInputDTO')
@ObjectType('Location')
@KeySet(['id'])
@Relation('region', () => RegionDTO, { disableRemove: true, nullable: true })
export class LocationDTO {
  @IDField(() => ID)
  id!: string;

  @FilterableField(() => String)
  location: string;

  // @Field(() => RegionDTO)
  // region: RegionDTO;

  @Field(() => RegionDTO)
  region: Types.ObjectId;

  @Field(() => [String])
  sector: string[];
}
