import { Injectable, Logger } from '@nestjs/common';
import { ShopifyShopResource } from './shop.type';
import { ShopifyCoreService } from '../core/core.service';

@Injectable()
export class ShopifyShopService {
    private readonly logger = new Logger(ShopifyShopService.name);
    constructor(private readonly shopifyCoreService: ShopifyCoreService) {}

    async getShop(domain: string, accessToken: string) {
        try {
            const query = `
                query getShop {
                    shop { 
                        id
                        name
                        url
                        email
                        currencyCode
                        primaryDomain {
                            host
                        }
                        plan {
                            partnerDevelopment
                            shopifyPlus
                            displayName
                        }
                        currencyFormats {
                            moneyFormat
                            moneyWithCurrencyFormat
                        }
                        billingAddress {
                            country
                            countryCodeV2
                        }
                    }
                }
            `;
            return this.shopifyCoreService.graphqlFetch<ShopifyShopResource>(domain, accessToken, {
                query: query,
            });
        } catch (e) {
            this.logger.error(e);
        }
    }
}
