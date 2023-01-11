import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@ObjectType()
@Schema()
export class Category {
  @Field()
  id: string;

  @Field()
  @Prop()
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
