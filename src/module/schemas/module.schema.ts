import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class ModuleEntity extends Document {
  @Prop()
  type: string;

  @Prop()
  status: string;

  @Prop({ type: Types.ObjectId, ref: 'Blacklist' })
  blacklist: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Whitelist' })
  whitelist: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Shop' })
  shop: Types.ObjectId;
}

export const ModuleEntitySchema = SchemaFactory.createForClass(ModuleEntity);
