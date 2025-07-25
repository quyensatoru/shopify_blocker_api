import { Module } from '@nestjs/common';
import { ShopifyShopService } from './shop.service';
import { ShopifyCoreModule } from '../core/core.module';

@Module({
  imports: [ShopifyCoreModule],
  providers: [ShopifyShopService],
  exports: [ShopifyShopService],
})
export class ShopifyShopModule {}
