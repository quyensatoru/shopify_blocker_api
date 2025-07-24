import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Whitelist, WhitelistSchema } from './schemas/whitelist.schema';
import { WhitelistService } from './whitelist.service';
import { WhitelistController } from './whitelist.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Whitelist.name, schema: WhitelistSchema }])],
    controllers: [WhitelistController],
    providers: [WhitelistService],
    exports: [WhitelistService],
})
export class WhitelistModule {}
