import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { WebhookModule } from './webhook/webhook.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { CommonModule } from './common/common.module';
import { ShopifyModule } from './shopify/shopify.module';

@Module({
  imports: [
      ShopModule,
      DatabaseModule,
      WebhookModule,
      ConfigModule,
      CommonModule,
      ShopifyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
