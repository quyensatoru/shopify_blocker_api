import { IsString, IsOptional, IsBoolean, IsNumber, IsMongoId } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  ipAddress: string;

  @IsOptional()
  @IsString()
  rickCore?: string;

  @IsOptional()
  @IsString()
  provide?: string;

  @IsOptional()
  @IsString()
  organization?: string;

  @IsOptional()
  @IsString()
  continent?: string;

  @IsOptional()
  @IsString()
  continentCode?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  isoCode?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  regionCode?: string;

  @IsOptional()
  @IsString()
  timezone?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsString()
  currencyCode?: string;

  @IsOptional()
  @IsString()
  currencySymbol?: string;

  @IsOptional()
  @IsString()
  devicesAddress?: string;

  @IsOptional()
  @IsString()
  devicesSubnet?: string;

  @IsOptional()
  @IsBoolean()
  isProxy?: boolean;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsMongoId()
  shop?: string;

  @IsOptional()
  @IsMongoId()
  order?: string;
}
