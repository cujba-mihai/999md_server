import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class FormFields {
  @Field()
  _id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ default: 'input' })
  element: string;

  @Field()
  @Prop({ default: 'text' })
  type: FormFieldsType;

  @Field(() => [String])
  @Prop({ type: SchemaTypes.Array, default: [] })
  values?: string[];
}
export type FormFieldsDocument = HydratedDocument<FormFields>;

export const FormFieldsSchema = SchemaFactory.createForClass(FormFields);

export type FormFieldsType =
  | 'text'
  | 'number'
  | 'radio'
  | 'checkbox'
  | 'tel'
  | 'date-time'
  | 'email'
  | 'password'
  | 'search'
  | 'file'
  | 'select'
  | 'multiselect';
