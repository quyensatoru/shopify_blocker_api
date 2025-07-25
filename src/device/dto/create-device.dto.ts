import { IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreateDeviceDto {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  vendor?: string;

  @IsOptional()
  @IsString()
  os?: string;

  @IsOptional()
  @IsString()
  browser?: string;

  @IsOptional()
  @IsMongoId()
  visitor?: string;

  @IsOptional()
  @IsMongoId()
  shop?: string;
}
