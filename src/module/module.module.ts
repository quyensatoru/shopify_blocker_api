import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleEntity, ModuleEntitySchema } from './schemas/module.schema';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: ModuleEntity.name, schema: ModuleEntitySchema }])],
  controllers: [ModuleController],
  providers: [ModuleService],
  exports: [ModuleService],
})
export class ModuleManagerModule {}
