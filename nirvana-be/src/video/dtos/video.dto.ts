import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  name: string;

  @IsUrl()
  url: string;
}

export class UpdateVideoDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsUrl()
  @IsOptional()
  url: string;
}
