import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { WebhookModule } from './webhook/webhook.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { CommonModule } from './common/common.module';
import { ShopifyModule } from './shopify/shopify.module';
import { ActivityModule } from './activity/activity.module';
import { VisitorModule } from './visitor/visitor.module';
import { BlacklistModule } from './blacklist/blacklist.module';
import { ModuleManagerModule } from './module/module.module';
import { DeviceModule } from './device/device.module';
import { OrderModule } from './order/order.module';

@Module({
    imports: [
        ShopModule,
        DatabaseModule,
        WebhookModule,
        ConfigModule,
        CommonModule,
        ShopifyModule,
        ActivityModule,
        VisitorModule,
        BlacklistModule,
        BlacklistModule,
        ModuleManagerModule,
        DeviceModule,
        OrderModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
