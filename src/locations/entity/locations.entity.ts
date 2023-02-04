import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Regions } from '~server/src/regions/entity/regions.entity';

@ObjectType()
@Schema()
export class Locations {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'Regions',
    required: true,
    nullable: false,
  })
  region: Regions;

  @Field()
  @Prop({ required: true })
  location: string;

  @Field(() => [String])
  @Prop({ required: true, default: ['center', 'suburbs'] })
  sector: string[];
}

export type LocationsDocument = HydratedDocument<Locations>;

export const LocationsSchema = SchemaFactory.createForClass(Locations);

// Ensure that the combination of "location" and "region" fields is unique.
// For example, if we already have "Bulboaca" in Anenii Noi and "Bulboaca" in Briceni,
// we can add these two locations, but we won't be able to add a new entry with a location and region
// that already exists.
LocationsSchema.index(
  {
    location: 1,
    region: 1,
  },
  {
    unique: true,
  },
);
