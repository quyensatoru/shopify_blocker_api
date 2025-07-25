import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { AfterAuthGuard } from '../common/authenticate/authenticate.guard';

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Post()
    @UseGuards(AfterAuthGuard)
    async create(@Body() body: CreateShopDto) {
        return this.shopService.create(body);
    }
}
