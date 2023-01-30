import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { HydratedDocument } from 'mongoose';
import {
  Product,
  ProductDocument,
  ProductSchema,
} from 'src/products/entities/product.entity';

export type UserDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User {
  @Field()
  id: string;

  @Field()
  @Prop()
  firstName: string;

  @Field()
  @Prop()
  lastName: string;

  @Field()
  @Prop({ unique: true })
  email: string;

  @Field(() => [Product])
  @Prop({ type: [ProductSchema], default: [] })
  products: ProductDocument[];
}

export const UserSchema = SchemaFactory.createForClass(User);
