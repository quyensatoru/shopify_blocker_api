import { IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreateBlacklistDto {
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
