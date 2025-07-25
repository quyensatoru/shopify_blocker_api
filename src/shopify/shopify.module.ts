import { Module } from '@nestjs/common';
import { ShopifyShopModule } from './shop/shop.module';
import { ShopifyOrderModule } from './order/order.module';
import { ShopifyCoreModule } from './core/core.module';

@Module({
  imports: [ShopifyShopModule, ShopifyOrderModule, ShopifyCoreModule],
})
export class ShopifyModule {}
