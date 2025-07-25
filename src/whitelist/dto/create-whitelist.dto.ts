import { IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreateWhitelistDto {
    @IsOptional()
    @IsString()
    criteria?: string;

    @IsOptional()
    @IsString()
    ipAddress?: string;

    @IsOptional()
    @IsString()
    note?: string;

    @IsOptional()
    @IsString()
    status?: string;

    @IsOptional()
    @IsMongoId()
    shop?: string;
}
