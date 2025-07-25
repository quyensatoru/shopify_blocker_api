import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Visitor } from './schemas/visitor.schema';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';

@Injectable()
export class VisitorService {
  constructor(@InjectModel(Visitor.name) private visitorModel: Model<Visitor>) {}

  async create(createVisitorDto: CreateVisitorDto): Promise<Visitor> {
    return this.visitorModel.create(createVisitorDto);
  }

  async findAll(): Promise<Visitor[]> {
    return this.visitorModel.find().exec();
  }

  async findOne(id: string): Promise<Visitor | null> {
    return this.visitorModel.findById(id).exec();
  }

  async update(id: string, updateVisitorDto: UpdateVisitorDto): Promise<Visitor | null> {
    return this.visitorModel.findByIdAndUpdate(id, updateVisitorDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Visitor | null> {
    return this.visitorModel.findByIdAndDelete(id).exec();
  }
}
