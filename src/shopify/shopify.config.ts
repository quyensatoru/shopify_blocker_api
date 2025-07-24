import { registerAs } from '@nestjs/config';
export type ShopifyConfig = {
    apiVersion?: string;
    apiSecretKey?: string;
};

export default registerAs<ShopifyConfig>('shopify', () => ({
    apiVersion: process.env.API_VERSION,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
}));
