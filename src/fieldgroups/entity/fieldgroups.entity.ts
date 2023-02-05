import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

@ObjectType()
@Schema()
export class FieldGroups {
  @Field()
  _id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  canBeToggled: boolean;

  @Field()
  @Prop({ ref: 'FormField', type: SchemaTypes.ObjectId, default: [] })
  fields: string[];

  @Field()
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'FormField',
    required: false,
    nullable: true,
  })
  requiredFields: string[];
}

export type FieldGroupsDocuments = HydratedDocument<FieldGroups>;

export const FieldGroupsSchema = SchemaFactory.createForClass(FieldGroups);

/**
 * Hooks
 */
