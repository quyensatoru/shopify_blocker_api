import { Module } from '@nestjs/common';
import { ShopModule } from './shop/shop.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ShopModule, OrderModule]
})
export class ShopifyModule {}
