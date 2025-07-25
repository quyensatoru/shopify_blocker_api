import { Injectable } from '@nestjs/common';
import { Shop } from './schemas/shop.schema';
import { FilterQuery, QueryOptions } from 'mongoose';
import { ShopRepository } from './shop.repository';
import { CustomHttpException } from '../common/http-response/http-response.exception';
import { CreateShopDto } from './dto/create-shop.dto';
import { ShopifyShopService } from '../shopify/shop/shop.service';

@Injectable()
export class ShopService {
  constructor(
    private readonly shopRepository: ShopRepository,
    private readonly shopifyShopService: ShopifyShopService,
  ) {}

  findOne(filter: FilterQuery<Shop>) {
    return this.shopRepository.findOne(filter);
  }

  async create(doc: CreateShopDto) {
    let shop = await this.shopRepository.findOne({
      domain: doc.shop,
    });

    const isInstalled = !shop || !shop.status;

    shop = await this.shopRepository.upsert(
      {
        domain: doc.shop,
      },
      {
        accessToken: doc.accessToken,
        status: true,
      },
    );

    if (!shop) {
      throw new CustomHttpException('Could not created shop');
    }
    if (isInstalled) {
      try {
        const result = await this.shopifyShopService.getShop(shop.domain, shop.accessToken);
        if (result?.data?.shop) {
          const shopResource = result.data.shop;
          shop = await this.shopRepository.upsert(
            {
              domain: shop.domain,
            },
            {
              visitUrl: shopResource.url,
              country: shopResource.billingAddress?.country,
              currencyFormat: shopResource.currencyFormats?.moneyFormat,
              currencyCode: shopResource.currencyCode,
              shopifyEmail: shopResource.email,
              shopifyName: shopResource.name,
              shopifyId: shopResource.id,
              shopifyPlan: shopResource.plan?.displayName,
            },
            {
              returnOriginal: false,
            },
          );
        }
      } catch (e) {
        console.log(e?.cause || e);
      }
    }
    return shop;
  }

  upsert(filter: FilterQuery<Shop>, update: Partial<Shop>, options?: QueryOptions) {
    return this.shopRepository.upsert(filter, update, options);
  }
}
