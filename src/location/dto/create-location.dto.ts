import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  KeySet,
  Relation,
} from '@ptc-org/nestjs-query-graphql';
import { Types } from 'mongoose';
import { RegionDTO } from '~server/src/region/dto/region.dto';

@InputType('CreateLocationInputDTO')
@ObjectType('CreateLocation')
@KeySet(['location'])
@Relation('region', () => RegionDTO, { disableRemove: true, nullable: true })
export class CreateLocationDTO {
  @FilterableField(() => String)
  location: string;

  @Field(() => String)
  region: Types.ObjectId;

  @Field(() => [String])
  sector: string[];
}
