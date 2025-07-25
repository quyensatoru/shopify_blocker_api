import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Visitor, VisitorSchema } from './schemas/visitor.schema';
import { VisitorService } from './visitor.service';
import { VisitorController } from './visitor.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Visitor.name, schema: VisitorSchema }])],
  controllers: [VisitorController],
  providers: [VisitorService],
  exports: [VisitorService],
})
export class VisitorModule {}
