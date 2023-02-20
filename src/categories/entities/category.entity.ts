import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { Subcategory } from 'src/subcategories/entities/subcategory.entity';
import { GetSubcategories } from '~server/src/subcategories/dto/get-subcategories.dto';

export type CategoryDocument = HydratedDocument<Category>;

@ObjectType()
@Schema()
export class Category extends Document {
  @Field()
  id: string;

  @Field()
  @Prop({ unique: true, required: true })
  name: string;

  @Field(() => GetSubcategories, { nullable: true, defaultValue: [] })
  @Prop({
    type: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Subcategory',
        nullable: false,
        default: [],
      },
    ],
  })
  subcategories: Types.ObjectId[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
