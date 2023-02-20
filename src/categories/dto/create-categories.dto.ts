import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category.dto';

@InputType()
@ObjectType()
export class CreateCategoriesInput {
  @Field(() => [CreateCategoryInput])
  categories: CreateCategoryInput[];
}
