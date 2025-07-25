import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blacklist } from './schemas/blacklist.schema';

@Injectable()
export class BlacklistRepository {
    constructor(@InjectModel(Blacklist.name) private blacklistModel: Model<Blacklist>) {}

    async create(doc: Partial<Blacklist>) {
        return this.blacklistModel.create(doc);
    }

    async findAll() {
        return this.blacklistModel.find().exec();
    }

    async findById(id: string) {
        return this.blacklistModel.findById(id).exec();
    }

    async update(id: string, doc: Partial<Blacklist>) {
        return this.blacklistModel.findByIdAndUpdate(id, doc, { new: true }).exec();
    }

    async delete(id: string) {
        return this.blacklistModel.findByIdAndDelete(id).exec();
    }
}
