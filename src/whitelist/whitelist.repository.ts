import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Whitelist } from './schemas/whitelist.schema';

@Injectable()
export class WhitelistRepository {
  constructor(@InjectModel(Whitelist.name) private whitelistModel: Model<Whitelist>) {}

  async create(doc: Partial<Whitelist>) {
    return this.whitelistModel.create(doc);
  }

  async findAll() {
    return this.whitelistModel.find().exec();
  }

  async findById(id: string) {
    return this.whitelistModel.findById(id).exec();
  }

  async update(id: string, doc: Partial<Whitelist>) {
    return this.whitelistModel.findByIdAndUpdate(id, doc, { new: true }).exec();
  }

  async delete(id: string) {
    return this.whitelistModel.findByIdAndDelete(id).exec();
  }
}
