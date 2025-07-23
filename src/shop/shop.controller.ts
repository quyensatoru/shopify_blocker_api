import { Body, Controller, Post } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { CustomHttpException } from '../common/http-response/http-response.exception';

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Post()
    async create(@Body() body: CreateShopDto) {
        const shop = await this.shopService
            .upsert(
                {
                    domain: body.shop,
                },
                {
                    accessToken: body.accessToken,
                    status: true,
                }
            )
            .select('-accessToken')
            .exec();

        if (!shop) {
            throw new CustomHttpException('Could not created shop');
        }

        return shop;
    }
}
