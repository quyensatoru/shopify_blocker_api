import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from './schemas/device.schema';

@Injectable()
export class DeviceRepository {
  constructor(@InjectModel(Device.name) private deviceModel: Model<Device>) {}

  async create(doc: Partial<Device>) {
    return this.deviceModel.create(doc);
  }

  async findAll() {
    return this.deviceModel.find().exec();
  }

  async findById(id: string) {
    return this.deviceModel.findById(id).exec();
  }

  async update(id: string, doc: Partial<Device>) {
    return this.deviceModel.findByIdAndUpdate(id, doc, { new: true }).exec();
  }

  async delete(id: string) {
    return this.deviceModel.findByIdAndDelete(id).exec();
  }
}
