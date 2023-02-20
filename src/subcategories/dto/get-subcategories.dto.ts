import { Optional } from '@nestjs/common';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { CreateSubcategoriesDTO } from '~server/src/graphql';
import { Subcategory } from '../entities/subcategory.entity';

@ObjectType('SubcategoriesDTO')
@InputType('SubcategoriesInputDTO')
@UnPagedRelation('subcategories', () => GetSubcategories, {
  disableRemove: true,
})
export class GetSubcategories {
  @Optional()
  @FilterableField()
  id?: string;

  @FilterableField(() => String, { nullable: true })
  name: string;

  @Field(() => [GetSubcategories], { nullable: true, defaultValue: [] })
  childSubcategories: GetSubcategories[];
}
