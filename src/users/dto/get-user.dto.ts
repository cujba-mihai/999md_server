import { Field, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { GetProductDTO } from '~server/src/products/dto/get-product.dto';
export type TCategoryName = string;
export type TCategories = TCategoryName[];

@ObjectType('UserDTO')
@UnPagedRelation('products', () => GetProductDTO, { disableRemove: true })
export class GetUserDTO {
  @Field()
  readonly _id: string;

  @FilterableField()
  firstName: string;

  @FilterableField()
  lastName: string;

  @FilterableField()
  email: string;

  @Field({ nullable: true })
  access_token?: string;

  @Field({ nullable: true })
  refresh_token?: string;
}
