import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModuleEntity } from './schemas/module.schema';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Injectable()
export class ModuleService {
    constructor(@InjectModel(ModuleEntity.name) private moduleModel: Model<ModuleEntity>) {}

    async create(createModuleDto: CreateModuleDto): Promise<ModuleEntity> {
        return this.moduleModel.create(createModuleDto);
    }

    async findAll(): Promise<ModuleEntity[]> {
        return this.moduleModel.find().exec();
    }

    async findOne(id: string): Promise<ModuleEntity | null> {
        return this.moduleModel.findById(id).exec();
    }

    async update(id: string, updateModuleDto: UpdateModuleDto): Promise<ModuleEntity | null> {
        return this.moduleModel.findByIdAndUpdate(id, updateModuleDto, { new: true }).exec();
    }

    async remove(id: string): Promise<ModuleEntity | null> {
        return this.moduleModel.findByIdAndDelete(id).exec();
    }
}
