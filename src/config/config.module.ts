import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import DatabaseConfig from '../database/database.config';
import ShopifyConfig from '../shopify/shopify.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [DatabaseConfig, ShopifyConfig],
    }),
  ],
})
export class ConfigModule {}
