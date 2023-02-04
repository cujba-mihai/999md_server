import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class FormField {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  @Prop({ required: true })
  label: string;

  @Field(() => String)
  @Prop({ type: String, required: true, default: JSON.stringify({}) })
  validationSchema: string;

  @Field(() => String)
  @Prop({ required: true })
  type: FormFieldType;

  @Field(() => [String])
  @Prop({ type: SchemaTypes.Array, default: [] })
  options: string[];
}
export type FormFieldDocument = HydratedDocument<FormField>;

export const FormFieldSchema = SchemaFactory.createForClass(FormField);

export type FormFieldType =
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
  | 'multiselect'
  | 'price'
  | 'textarea';
