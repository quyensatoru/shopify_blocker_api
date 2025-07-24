import { PartialType } from '@nestjs/mapped-types';
import { ShopDto } from './create-shop.dto';

export class UpdateShopDto extends PartialType(ShopDto) {}
