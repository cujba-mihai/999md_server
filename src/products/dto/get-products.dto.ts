import { Field, ObjectType } from '@nestjs/graphql';
import { GetCategoriesDTO } from '~server/src/categories/dto/get-categories.dto';
import { GetSubcategories } from '~server/src/subcategories/dto/get-subcategories.dto';
import { GetUserDTO } from '~server/src/users/dto/get-user.dto';

@ObjectType('GetProductsDTO')
export class GetProductsDTO {
  @Field()
  _id: string;

  @Field(() => GetUserDTO)
  author: string;

  @Field(() => GetCategoriesDTO)
  category: string;

  @Field(() => GetSubcategories)
  subcategory: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  currency: string;

  @Field(() => [String], { nullable: false })
  images: string[];

  @Field({ nullable: false })
  thumbnail: string;

  // Should store specification categories (e.g. general, other) as objects
  // general: { type: 'sell' }
  @Field(() => String, { nullable: false })
  productDetails: object;
}
