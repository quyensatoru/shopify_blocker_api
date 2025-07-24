import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Visitor extends Document {
    @Prop()
    email: string;

    @Prop()
    shopifyCustomerId: string;

    @Prop({ type: Types.ObjectId, ref: 'Shop' })
    shop: Types.ObjectId;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Activity' }] })
    activity: Types.ObjectId[];
}

export const VisitorSchema = SchemaFactory.createForClass(Visitor);
