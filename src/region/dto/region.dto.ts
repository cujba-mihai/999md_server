import { ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  KeySet,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { LocationDTO } from '~server/src/location/dto/location.dto';

@ObjectType('Region')
@InputType('RegionInputDTO')
@KeySet(['id'])
@UnPagedRelation('location', () => LocationDTO, {
  disableRemove: true,
  disableFilter: false,
  nullable: true,
})
export class RegionDTO {
  @IDField(() => ID)
  id!: string;

  @FilterableField(() => String, { nullable: true })
  region: string;
}
