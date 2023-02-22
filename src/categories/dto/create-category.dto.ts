import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CreateSubcategoriesInput } from '~server/src/subcategories/dto/create-subcategories.input';

@ObjectType()
@InputType()
export class CreateCategoryDTO {
  @Field()
  name: string;

  @Field(() => [CreateSubcategoriesInput], { nullable: true })
  subcategories: CreateSubcategoriesInput[];
}
