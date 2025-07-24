import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Visitor } from './schemas/visitor.schema';

@Injectable()
export class VisitorRepository {
    constructor(@InjectModel(Visitor.name) private visitorModel: Model<Visitor>) {}

    async create(doc: Partial<Visitor>) {
        return this.visitorModel.create(doc);
    }

    async findAll() {
        return this.visitorModel.find().exec();
    }

    async findById(id: string) {
        return this.visitorModel.findById(id).exec();
    }

    async update(id: string, doc: Partial<Visitor>) {
        return this.visitorModel.findByIdAndUpdate(id, doc, { new: true }).exec();
    }

    async delete(id: string) {
        return this.visitorModel.findByIdAndDelete(id).exec();
    }
}
