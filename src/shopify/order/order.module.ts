import { Module } from '@nestjs/common';
import { ShopifyOrderService } from './order.service';
import { ShopifyCoreModule } from '../core/core.module';

@Module({
  imports: [ShopifyCoreModule],
  providers: [ShopifyOrderService],
  exports: [ShopifyOrderService],
})
export class ShopifyOrderModule {}
