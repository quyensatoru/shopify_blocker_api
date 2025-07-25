import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blacklist } from './schemas/blacklist.schema';
import { CreateBlacklistDto } from './dto/create-blacklist.dto';
import { UpdateBlacklistDto } from './dto/update-blacklist.dto';

@Injectable()
export class BlacklistService {
  constructor(@InjectModel(Blacklist.name) private blacklistModel: Model<Blacklist>) {}

  async create(createBlacklistDto: CreateBlacklistDto): Promise<Blacklist> {
    return this.blacklistModel.create(createBlacklistDto);
  }

  async findAll(): Promise<Blacklist[]> {
    return this.blacklistModel.find().exec();
  }

  async findOne(id: string): Promise<Blacklist | null> {
    return this.blacklistModel.findById(id).exec();
  }

  async update(id: string, updateBlacklistDto: UpdateBlacklistDto): Promise<Blacklist | null> {
    return this.blacklistModel.findByIdAndUpdate(id, updateBlacklistDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Blacklist | null> {
    return this.blacklistModel.findByIdAndDelete(id).exec();
  }
}
