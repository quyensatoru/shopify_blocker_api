import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Blacklist extends Document {
  @Prop()
  criteria: string;

  @Prop()
  ipAddress: string;

  @Prop()
  note: string;

  @Prop()
  status: string;

  @Prop({ type: Types.ObjectId, ref: 'Shop' })
  shop: Types.ObjectId;
}

export const BlacklistSchema = SchemaFactory.createForClass(Blacklist);
