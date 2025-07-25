import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Whitelist } from './schemas/whitelist.schema';
import { CreateWhitelistDto } from './dto/create-whitelist.dto';
import { UpdateWhitelistDto } from './dto/update-whitelist.dto';

@Injectable()
export class WhitelistService {
  constructor(@InjectModel(Whitelist.name) private whitelistModel: Model<Whitelist>) {}

  async create(createWhitelistDto: CreateWhitelistDto): Promise<Whitelist> {
    return this.whitelistModel.create(createWhitelistDto);
  }

  async findAll(): Promise<Whitelist[]> {
    return this.whitelistModel.find().exec();
  }

  async findOne(id: string): Promise<Whitelist | null> {
    return this.whitelistModel.findById(id).exec();
  }

  async update(id: string, updateWhitelistDto: UpdateWhitelistDto): Promise<Whitelist | null> {
    return this.whitelistModel.findByIdAndUpdate(id, updateWhitelistDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Whitelist | null> {
    return this.whitelistModel.findByIdAndDelete(id).exec();
  }
}
