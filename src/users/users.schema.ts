import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Product, ProductDocument } from 'src/products/entities/product.entity';

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
  @Prop({ unique: true, required: true })
  email: string;

  @Field(() => [Product])
  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Product', default: [] })
  products: ProductDocument[];
}

export const UserSchema = SchemaFactory.createForClass(User);
