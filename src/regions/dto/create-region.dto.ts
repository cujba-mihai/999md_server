import { Field, InputType } from '@nestjs/graphql';
import { Locations } from '~server/src/locations/entity/locations.entity';

@InputType()
export class CreateRegionDTO {
  @Field()
  region: string;

  @Field(() => [Locations])
  locations: Locations[];
}
