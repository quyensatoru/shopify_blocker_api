import { Injectable } from '@nestjs/common';
import { GraphQL } from '@bss-sbc/shopify-api-fetcher';
import { GraphqlResult } from '../shopify.type';
import { fetchWithRetryBasedOnCost } from '../shopify.helper';
import { ConfigService } from '@nestjs/config';
import { AllConfig } from '../../config/config.type';

@Injectable()
export class ShopifyCoreService {
    constructor(private readonly configService: ConfigService<AllConfig>) {
        GraphQL.setConfig({
            version: this.configService.get('shopify.apiVersion', { infer: true }),
        });
    }

    async graphqlFetch<T>(
        domain: string,
        access_token: string,
        params: {
            query: string;
            variables?: Record<string, any>;
            identifier?: Record<string, any>;
        },
    ) {
        return fetchWithRetryBasedOnCost(() => {
            return GraphQL.safeFetch(domain, access_token, params) as Promise<GraphqlResult<T>>;
        });
    }
}
