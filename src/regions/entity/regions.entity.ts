import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Locations } from '~server/src/locations/entity/locations.entity';

@ObjectType()
@Schema()
export class Regions {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop()
  region: string;

  @Field(() => [Locations])
  @Prop({
    ref: 'Locations',
    type: [SchemaTypes.ObjectId],
    nullable: false,
  })
  locations: [Locations];
}

export type RegionsDocument = HydratedDocument<Regions>;

export const RegionsSchema = SchemaFactory.createForClass(Regions);

RegionsSchema.index({ region: 1 }, { unique: true });
