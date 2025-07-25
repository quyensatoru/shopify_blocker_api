import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class ShopDto {
    @IsString()
    domain: string;

    @IsString()
    accessToken: string;

    @IsBoolean()
    status: boolean;

    @IsOptional()
    @IsString()
    shopifyId?: string;

    @IsOptional()
    @IsString()
    visitUrl?: string;

    @IsOptional()
    @IsString()
    shopifyName?: string;

    @IsOptional()
    @IsString()
    shopifyEmail?: string;

    @IsOptional()
    @IsString()
    currencyCode?: string;

    @IsOptional()
    @IsString()
    shopifyPlan?: string;

    @IsOptional()
    @IsString()
    currencyFormat?: string;

    @IsOptional()
    @IsString()
    country?: string;
}

export class CreateShopDto {
    @IsString()
    shop: string;

    @IsString()
    accessToken: string;
}
