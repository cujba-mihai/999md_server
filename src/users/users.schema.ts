import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User {
  @Field()
  id: string;

  @Field()
  @Prop()
  firstName: string;

  @Field()
  @Prop()
  lastName: string;

  @Field()
  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
