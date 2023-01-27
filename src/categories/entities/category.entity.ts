import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Subcategory } from 'src/subcategories/entities/subcategory.entity';

export type CategoryDocument = HydratedDocument<Category>;

@ObjectType()
@Schema()
export class Category {
  @Field()
  id: string;

  @Field()
  @Prop({ unique: true, required: true })
  name: string;

  @Field(() => [Subcategory])
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
  subcategories: Subcategory[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
