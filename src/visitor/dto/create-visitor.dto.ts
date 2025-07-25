import { IsString, IsOptional, IsMongoId, IsArray } from 'class-validator';

export class CreateVisitorDto {
  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  shopifyCustomerId?: string;

  @IsOptional()
  @IsMongoId()
  shop?: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  activity?: string[];
}
