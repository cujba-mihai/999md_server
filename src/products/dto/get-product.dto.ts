import { Field, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { GetCategoriesDTO } from '~server/src/categories/dto/get-categories.input';
import { GetSubcategories } from '~server/src/subcategories/dto/get-subcategories.dto';

@ObjectType()
@UnPagedRelation('subcategory', () => GetSubcategories, { disableRemove: true })
@UnPagedRelation('category', () => GetCategoriesDTO, { disableRemove: true })
export class GetProductDTO {
  @Field()
  _id: string;

  @Field()
  author: string;

  @FilterableField()
  name: string;

  @Field()
  description: string;

  @FilterableField()
  price: number;

  @Field()
  currency: string;

  @Field(() => [String], { nullable: false })
  images: string[];

  @Field({ nullable: false })
  thumbnail: string;

  @Field(() => String, { nullable: false })
  productDetails: object;
}
