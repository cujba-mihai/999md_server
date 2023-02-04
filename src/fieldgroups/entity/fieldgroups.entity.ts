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
  @Prop()
  groupValidationSchema: string;
}

export type FieldGroupsDocuments = HydratedDocument<FieldGroups>;
export const FieldGroupsSchema = SchemaFactory.createForClass(FieldGroups);

FieldGroupsSchema.pre('save', function (next) {
  this.groupValidationSchema = JSON.stringify(this.groupValidationSchema);

  next();
});
