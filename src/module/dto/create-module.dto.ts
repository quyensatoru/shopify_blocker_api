import { IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreateModuleDto {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsMongoId()
  blacklist?: string;

  @IsOptional()
  @IsMongoId()
  whitelist?: string;

  @IsOptional()
  @IsMongoId()
  shop?: string;
}
