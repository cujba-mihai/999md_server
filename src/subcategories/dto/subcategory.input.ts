import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SubcategoryInput {
  @Field()
  name: string;

  @Field(() => String)
  parentCategory: string;

  @Field(() => [SubcategoryInput], { nullable: true })
  subcategories: SubcategoryInput[];
}
