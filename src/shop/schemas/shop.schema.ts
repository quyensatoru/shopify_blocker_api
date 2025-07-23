import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ _id: true, timestamps: true, versionKey: false })
export class Shop {
    @Prop({ required: true, type: String })
    accessToken: string;

    @Prop({ required: true, type: String, unique: true })
    domain: string;

    @Prop({ required: true, type: Boolean })
    status: boolean;
}

export type ShopDocument = HydratedDocument<Shop>;
export const ShopSchema = SchemaFactory.createForClass(Shop);

ShopSchema.index({ domain: 1 });
