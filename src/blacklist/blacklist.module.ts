import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Blacklist, BlacklistSchema } from './schemas/blacklist.schema';
import { BlacklistService } from './blacklist.service';
import { BlacklistController } from './blacklist.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Blacklist.name, schema: BlacklistSchema }])],
  controllers: [BlacklistController],
  providers: [BlacklistService],
  exports: [BlacklistService],
})
export class BlacklistModule {}
