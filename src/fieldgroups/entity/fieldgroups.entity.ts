import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { FormField } from '~server/src/formfields/entity/formfield.entity';

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

  @Field(() => [FormField], { nullable: true })
  @Prop({ ref: 'FormField', type: [SchemaTypes.ObjectId], default: [] })
  fields: string[];
}

export type FieldGroupsDocuments = HydratedDocument<FieldGroups>;

export const FieldGroupsSchema = SchemaFactory.createForClass(FieldGroups);

/**
 * Hooks
 */
