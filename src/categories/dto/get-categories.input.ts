import { Field, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { GetSubcategories } from '~server/src/subcategories/dto/get-subcategories.dto';
import { Subcategory } from '~server/src/subcategories/entities/subcategory.entity';
export type TCategoryName = string;
export type TCategories = TCategoryName[];

@UnPagedRelation('subcategories', () => GetSubcategories, {
  disableRemove: true,
})
@ObjectType('CategoryDTO')
export class GetCategoriesDTO {
  @FilterableField()
  id?: string;

  @FilterableField()
  name: string;

  @Field(() => GetSubcategories, { nullable: true })
  subcategories: GetSubcategories[];
}
