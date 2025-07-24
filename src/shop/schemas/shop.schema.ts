import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: true, timestamps: true, versionKey: false })
export class Shop extends Document {
    @Prop({ required: true, type: String, unique: true })
    domain: string;

    @Prop({ required: true, type: String })
    accessToken: string;

    @Prop({ required: true, type: Boolean })
    status: boolean;

    @Prop({ type: String })
    shopifyId?: string;

    @Prop({ type: String })
    visitUrl?: string;

    @Prop({ type: String })
    shopifyName?: string;

    @Prop({ type: String })
    shopifyEmail?: string;

    @Prop({ type: String })
    currencyCode?: string;

    @Prop({ type: String })
    shopifyPlan?: string;

    @Prop({ type: String })
    currencyFormat?: string;

    @Prop({ type: String })
    country?: string;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);
ShopSchema.index({ domain: 1 });
