import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from './schemas/activity.schema';

@Injectable()
export class ActivityRepository {
  constructor(@InjectModel(Activity.name) private activityModel: Model<Activity>) {}

  async create(doc: Partial<Activity>) {
    return this.activityModel.create(doc);
  }

  async findAll() {
    return this.activityModel.find().exec();
  }

  async findById(id: string) {
    return this.activityModel.findById(id).exec();
  }

  async update(id: string, doc: Partial<Activity>) {
    return this.activityModel.findByIdAndUpdate(id, doc, { new: true }).exec();
  }

  async delete(id: string) {
    return this.activityModel.findByIdAndDelete(id).exec();
  }
}
