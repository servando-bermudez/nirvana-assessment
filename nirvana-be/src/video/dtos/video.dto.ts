import { IsOptional, IsString, IsUrl, Matches } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  name: string;

  @IsUrl()
  @Matches(
    new RegExp(
      `(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))`,
    ),
    {
      message: 'Invalid Youtube url',
    },
  )
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
