import { Module } from '@nestjs/common';
import { ShopModule } from './shop/shop.module';
import { OrderModule } from './order/order.module';
import { ShopifyService } from './shopify.service';

@Module({
    imports: [ShopModule, OrderModule],
    providers: [ShopifyService],
})
export class ShopifyModule {}
