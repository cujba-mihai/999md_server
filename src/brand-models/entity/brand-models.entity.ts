import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Subcategory } from '~server/src/subcategories/entities/subcategory.entity';

@ObjectType()
@Schema()
export class BrandModels {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  @Prop({ ref: Subcategory.name, type: SchemaTypes.String, required: true })
  subcategoryName: string;

  @Field(() => String)
  @Prop({ type: SchemaTypes.String, required: true })
  brand: string;

  @Field(() => [String])
  @Prop({ type: [SchemaTypes.String], default: [], required: true })
  models: string[];
}

export type BrandModelsDocument = HydratedDocument<BrandModels>;

export const BrandModelsSchema = SchemaFactory.createForClass(BrandModels);
