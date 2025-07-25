import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schemas/order.schema';

@Injectable()
export class OrderRepository {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(doc: Partial<Order>) {
    return this.orderModel.create(doc);
  }

  async findAll() {
    return this.orderModel.find().exec();
  }

  async findById(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, doc: Partial<Order>) {
    return this.orderModel.findByIdAndUpdate(id, doc, { new: true }).exec();
  }

  async delete(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
