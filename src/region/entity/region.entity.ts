import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Document } from 'mongoose';
import { Location } from '~server/src/location/entity/location.entity';

@ObjectType('RegionEntity')
@Schema({ timestamps: true })
export class Region extends Document {
  @Prop({ required: true })
  region: string;

  @Prop({
    ref: 'Location',
    type: [SchemaTypes.ObjectId],
    nullable: true,
    default: [],
  })
  locations: Location[];
}

export type RegionDocument = HydratedDocument<Region>;

export const RegionSchema = SchemaFactory.createForClass(Region);

RegionSchema.index({ region: 1 }, { unique: true });
