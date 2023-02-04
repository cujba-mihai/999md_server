import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindRegionDTO {
  @Field()
  region: string;
}
