import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLocationInput {
  @Field()
  region: string;

  @Field()
  location: string;

  @Field()
  sector: string[];
}
