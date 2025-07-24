import { InjectModel } from '@nestjs/mongoose';
import { Shop } from './schemas/shop.schema';
import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopRepository {
    constructor(@InjectModel(Shop.name) private readonly shopModel: Model<Shop>) {}

    findOne(filter: FilterQuery<Shop>) {
        return this.shopModel.findOne(filter);
    }

    create(shop: Partial<Shop>) {
        return this.shopModel.create(shop);
    }

    upsert(filter: FilterQuery<Shop>, update: Partial<Shop>, options?: QueryOptions) {
        return this.shopModel.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true,
            ...(options ? options : {}),
        });
    }
}
