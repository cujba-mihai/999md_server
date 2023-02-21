import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { UnPagedRelation } from '@ptc-org/nestjs-query-graphql';
import { Types } from 'mongoose';
import { GetCategoriesDTO } from '~server/src/categories/dto/get-categories.input';
import { GetSubcategories } from '~server/src/subcategories/dto/get-subcategories.dto';
import { GetUserDTO } from '~server/src/users/dto/get-user.dto';
import { User } from '~server/src/users/users.schema';

@InputType('CreateProductInput')
@ObjectType('CreateProductDTO')
@UnPagedRelation('subcategory', () => GetSubcategories, { disableRemove: true })
@UnPagedRelation('category', () => GetCategoriesDTO, { disableRemove: true })
export class CreateProductInput {
  @Field(() => String, { nullable: false })
  author: string;

  @Field(() => String, { nullable: false })
  category: string;

  @Field(() => String, { nullable: false })
  subcategory: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => Int, { nullable: false })
  price: number;

  @Field(() => String, { nullable: false })
  currency: string;

  @Field(() => [String], { nullable: false })
  images: string[];

  @Field(() => String, { nullable: false })
  thumbnail: string;

  // Should store specification categories (e.g. general, other) as objects
  // general: { type: 'sell' }
  @Field({ nullable: false })
  productDetails: string;
}
