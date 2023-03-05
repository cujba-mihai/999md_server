import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Subcategory } from 'src/subcategories/entities/subcategory.entity';

export type CategoryDocument = HydratedDocument<Category>;

@ObjectType()
@Schema()
export class Category {
  @Field(() => String)
  _id: string;

  @Field()
  @Prop({ unique: true, required: true })
  name: string;

  @Field(() => [Subcategory], { nullable: true })
  @Prop({
    type: [
      {
        type: SchemaTypes.ObjectId,
        ref: Subcategory.name,
        nullable: false,
        default: [],
      },
    ],
  })
  subcategories: Subcategory[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
