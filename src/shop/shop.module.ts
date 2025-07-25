import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Shop, ShopSchema } from './schemas/shop.schema';
import { ShopController } from './shop.controller';
import { ShopifyShopModule } from '../shopify/shop/shop.module';
import { ShopRepository } from './shop.repository';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Shop.name, schema: ShopSchema }]),
        ShopifyShopModule,
    ],
    providers: [ShopService, ShopRepository],
    controllers: [ShopController],
    exports: [ShopService],
})
export class ShopModule {}
