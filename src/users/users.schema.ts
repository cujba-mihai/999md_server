import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, SchemaTypes } from 'mongoose';
import { Product, ProductDocument } from 'src/products/entities/product.entity';

export type UserDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User extends Document {
  @Field()
  readonly _id: string;

  @Field()
  @Prop()
  firstName: string;

  @Field()
  @Prop()
  lastName: string;

  @Field()
  @Prop({ unique: true, required: true })
  email: string;

  @Field()
  @Prop()
  password: string;

  @Field({ nullable: true })
  access_token?: string;

  @Field({ nullable: true })
  @Prop()
  refresh_token?: string;

  @Field(() => [Product])
  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Product', default: [] })
  products: ProductDocument[];
}

export const UserSchema = SchemaFactory.createForClass(User);
