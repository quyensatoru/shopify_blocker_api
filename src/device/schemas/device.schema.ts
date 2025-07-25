import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Device extends Document {
    @Prop()
    type: string;

    @Prop()
    vendor: string;

    @Prop()
    os: string;

    @Prop()
    browser: string;

    @Prop({ type: Types.ObjectId, ref: 'Visitor' })
    visitor: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Shop' })
    shop: Types.ObjectId;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
