import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModuleEntity } from './schemas/module.schema';

@Injectable()
export class ModuleRepository {
  constructor(@InjectModel(ModuleEntity.name) private moduleModel: Model<ModuleEntity>) {}

  async create(doc: Partial<ModuleEntity>) {
    return this.moduleModel.create(doc);
  }

  async findAll() {
    return this.moduleModel.find().exec();
  }

  async findById(id: string) {
    return this.moduleModel.findById(id).exec();
  }

  async update(id: string, doc: Partial<ModuleEntity>) {
    return this.moduleModel.findByIdAndUpdate(id, doc, { new: true }).exec();
  }

  async delete(id: string) {
    return this.moduleModel.findByIdAndDelete(id).exec();
  }
}
