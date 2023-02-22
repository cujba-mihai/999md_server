import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetOneSubcategoryDTO {
  @Field(() => ID)
  id: string;
}
