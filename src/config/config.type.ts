import { DatabaseConfig } from '../database/database.config';
import { ShopifyConfig } from '../shopify/shopify.config';

export type AllConfig = {
    database: DatabaseConfig;
    shopify: ShopifyConfig;
};
