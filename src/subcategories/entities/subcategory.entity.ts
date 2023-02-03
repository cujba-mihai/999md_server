import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { FormField } from 'src/formfields/entity/formfield.entity';

export type SubcategoryDocument = HydratedDocument<Subcategory>;

@ObjectType()
@Schema()
export class Subcategory {
  @Field()
  _id: string;

  @Field()
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Category', required: true })
  parentCategory: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop({ type: SchemaTypes.ObjectId, ref: 'FormField', default: [] })
  productFields: FormField[];

  @Field(() => [Subcategory])
  @Prop({
    type: [{ type: SchemaTypes.ObjectId, ref: 'Subcategory' }],
    default: [],
  })
  childCategories: Subcategory[];
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory);
