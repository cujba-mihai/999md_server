import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetOneSubcategoryDTO {
  @Field(() => String)
  _id: string;
}
