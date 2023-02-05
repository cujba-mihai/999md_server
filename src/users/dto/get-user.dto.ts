import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from '~server/src/graphql';
import { GetProductsDTO } from '~server/src/products/dto/get-products.dto';
export type TCategoryName = string;
export type TCategories = TCategoryName[];

@ObjectType('UserDTO')
export class GetUserDTO {
  @Field()
  readonly _id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  access_token?: string;

  @Field(() => [GetProductsDTO])
  products: Product[];

  @Field({ nullable: true })
  refresh_token?: string;
}
