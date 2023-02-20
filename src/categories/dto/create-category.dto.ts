import { InputType, Field, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { CreateSubcategoriesInput } from '~server/src/subcategories/dto/create-subcategories.input';
import { GetSubcategories } from '~server/src/subcategories/dto/get-subcategories.dto';

export type TCategoryName = string;
export type TCategories = TCategoryName[];

// @UnPagedRelation('subcategories', () => CreateSubcategoriesInput, {
//   disableRemove: true,
// })
@InputType('CreateCategoryInput')
@ObjectType('CreateCategoryDTO')
export class CreateCategoryInput {
  @FilterableField()
  name: string;

  @Field(() => [CreateSubcategoriesInput], { nullable: true, defaultValue: [] })
  subcategories: CreateSubcategoriesInput[];
}
