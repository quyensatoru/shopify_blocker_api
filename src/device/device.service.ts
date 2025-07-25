import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from './schemas/device.schema';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DeviceService {
  constructor(@InjectModel(Device.name) private deviceModel: Model<Device>) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.deviceModel.create(createDeviceDto);
  }

  async findAll(): Promise<Device[]> {
    return this.deviceModel.find().exec();
  }

  async findOne(id: string): Promise<Device | null> {
    return this.deviceModel.findById(id).exec();
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto): Promise<Device | null> {
    return this.deviceModel.findByIdAndUpdate(id, updateDeviceDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Device | null> {
    return this.deviceModel.findByIdAndDelete(id).exec();
  }
}
