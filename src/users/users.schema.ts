import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User {
  @Field()
  readonly _id: string;

  @Field()
  @Prop()
  firstName: string;

  @Field()
  @Prop()
  lastName: string;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  password: string;

  @Field({ nullable: true })
  access_token?: string;

  @Field({ nullable: true })
  @Prop()
  refresh_token?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
