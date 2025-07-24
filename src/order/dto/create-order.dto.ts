import { IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreateOrderDto {
    @IsOptional()
    @IsString()
    shopifyId?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    browserIp?: string;

    @IsOptional()
    @IsString()
    rick?: string;

    @IsOptional()
    @IsMongoId()
    shop?: string;

    @IsOptional()
    @IsMongoId()
    visitor?: string;
}
