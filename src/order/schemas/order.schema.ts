import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
    @Prop({ type: String })
    shopifyId: string;

    @Prop({ type: String })
    email: string;

    @Prop({ type: String })
    browserIp: string;

    @Prop({ type: String })
    rick: string;

    @Prop({ type: Types.ObjectId, ref: 'Shop' })
    shop: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Visitor' })
    visitor: Types.ObjectId;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
