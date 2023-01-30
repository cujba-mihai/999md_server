import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubcategoriesInput {
  @Field()
  name: string;

  @Field()
  parentCategory: string;

  @Field(() => [CreateSubcategoriesInput], { nullable: true })
  subcategories: CreateSubcategoriesInput[];
}
