import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class SubcategoryInput {
  @Field()
  name: string;

  @Field(() => ID)
  parentCategory: string;

  @Field(() => [SubcategoryInput], { nullable: true })
  subcategories: SubcategoryInput[];
}
