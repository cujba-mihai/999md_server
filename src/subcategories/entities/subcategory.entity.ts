import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, SchemaTypes } from 'mongoose';

export type SubcategoryDocument = HydratedDocument<Subcategory>;

@ObjectType()
@Schema()
export class Subcategory extends Document {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @Prop({ nullable: false, require: true })
  name: string;

  @Field(() => [Subcategory], { nullable: true, defaultValue: [] })
  @Prop({
    type: [{ type: SchemaTypes.ObjectId, ref: Subcategory.name }],
    default: [],
    nullable: true,
  })
  childSubcategories: Subcategory[];
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory);
