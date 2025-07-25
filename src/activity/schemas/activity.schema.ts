import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ id: true, timestamps: true, versionKey: false })
export class Activity extends Document {
  @Prop({ required: true })
  ipAddress: string;

  @Prop()
  rickCore: string;

  @Prop()
  provide: string;

  @Prop()
  organization: string;

  @Prop()
  continent: string;

  @Prop()
  continentCode: string;

  @Prop()
  country: string;

  @Prop()
  isoCode: string;

  @Prop()
  region: string;

  @Prop()
  regionCode: string;

  @Prop()
  timezone: string;

  @Prop()
  city: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  currencyCode: string;

  @Prop()
  currencySymbol: string;

  @Prop()
  devicesAddress: string;

  @Prop()
  devicesSubnet: string;

  @Prop()
  isProxy: boolean;

  @Prop()
  type: string;

  @Prop({ type: Types.ObjectId, ref: 'Shop' })
  shop: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Order' })
  order: Types.ObjectId;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
