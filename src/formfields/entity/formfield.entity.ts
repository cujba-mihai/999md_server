import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { JsonSchemaType } from '@sodaru/yup-to-json-schema/dist/TypeMap';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { FormFieldType } from '~server/types';

@ObjectType()
@Schema({ timestamps: true })
export class FormField {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  @Prop({ required: true })
  label: string;

  @Field(() => String)
  @Prop({ type: Object, required: true, default: {} })
  validationSchema: JsonSchemaType;

  @Field(() => String)
  @Prop({ type: SchemaTypes.String, required: true })
  type: FormFieldType;

  @Field(() => [String])
  @Prop({ type: SchemaTypes.Array, default: [] })
  options: string[];
}
export type FormFieldDocument = HydratedDocument<FormField>;

export const FormFieldSchema = SchemaFactory.createForClass(FormField);

/**
 * Hooks
 */
