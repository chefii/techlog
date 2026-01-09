import {
  IsString,
  IsBoolean,
  IsArray,
  IsOptional,
  MinLength,
} from "class-validator";

export class CreatePostDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  slug: string;

  @IsString()
  @MinLength(1)
  content: string;

  @IsString()
  @IsOptional()
  excerpt?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  thumbnail?: string;

  @IsBoolean()
  @IsOptional()
  published?: boolean;
}
