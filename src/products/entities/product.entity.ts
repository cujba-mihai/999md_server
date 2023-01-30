import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@ObjectType()
@Schema({ timestamps: true })
export class Product {
  @Field()
  _id: string;

  @Field()
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'User',
    nullable: false,
    required: true,
  })
  author: string;

  @Field()
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'Category',
    nullable: false,
    required: true,
  })
  category: string;

  @Field()
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'Subcategory',
    nullable: false,
    required: true,
  })
  subcategory: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field()
  @Prop({ required: true })
  price: number;

  @Field()
  @Prop({ required: true })
  currency: string;

  @Field(() => [String], { nullable: false })
  @Prop({ required: true })
  images: string[];

  @Field({ nullable: false })
  @Prop({ required: true })
  thumbnail: string;

  // Should store specification categories (e.g. general, other) as objects
  // general: { type: 'sell' }
  @Field(() => String, { nullable: false })
  @Prop({
    type: String,
    get: function (data: string) {
      try {
        return JSON.parse(data);
      } catch (error) {
        return data;
      }
    },
    set: function (data: IProcutDetails) {
      return typeof data === 'string' ? data : JSON.stringify(data);
    },
  })
  productDetails: object;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

export interface IProcutDetails {
  general: object;
  properties: object;
  security?: string[];
  comfort?: string[];
}
