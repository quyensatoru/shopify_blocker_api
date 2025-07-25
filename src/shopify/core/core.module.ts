import { Module } from '@nestjs/common';
import { ShopifyCoreService } from './core.service';

@Module({
  providers: [ShopifyCoreService],
  exports: [ShopifyCoreService],
})
export class ShopifyCoreModule {}
