import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubcategoryInput {
  @Field(() => String)
  categoryId: string;

  @Field(() => String)
  name: string;
}
