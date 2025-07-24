import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from './schemas/activity.schema';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivityService {
    constructor(@InjectModel(Activity.name) private activityModel: Model<Activity>) {}

    async create(createActivityDto: CreateActivityDto): Promise<Activity> {
        return this.activityModel.create(createActivityDto);
    }

    async findAll(): Promise<Activity[]> {
        return this.activityModel.find().exec();
    }

    async findOne(id: string): Promise<Activity | null> {
        return this.activityModel.findById(id).exec();
    }

    async update(id: string, updateActivityDto: UpdateActivityDto): Promise<Activity | null> {
        return this.activityModel.findByIdAndUpdate(id, updateActivityDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Activity | null> {
        return this.activityModel.findByIdAndDelete(id).exec();
    }
}
