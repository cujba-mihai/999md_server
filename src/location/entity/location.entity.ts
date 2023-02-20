import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, SchemaTypes, Types } from 'mongoose';

@ObjectType('LocationEntity')
@Schema({ timestamps: true })
export class Location extends Document {
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'Region',
    required: true,
    nullable: false,
  })
  region: Types.ObjectId;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, default: ['center', 'suburbs'] })
  sector: string[];
}

export type LocationDocument = HydratedDocument<Location>;

export const LocationSchema = SchemaFactory.createForClass(Location);

// Ensure that the combination of "location" and "region" fields is unique.
// For example, if we already have "Bulboaca" in Anenii Noi and "Bulboaca" in Briceni,
// we can add these two location, but we won't be able to add a new entry with a location and region
// that already exists.
LocationSchema.index(
  {
    location: 1,
    region: 1,
  },
  {
    unique: true,
  },
);
