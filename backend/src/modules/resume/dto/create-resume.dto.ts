import {
  IsString,
  IsBoolean,
  IsArray,
  IsOptional,
  IsEmail,
  ValidateNested,
  IsNumber,
  Min,
  Max,
  IsDateString,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

class ExperienceDto {
  @IsString()
  company: string;

  @IsString()
  position: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  achievements?: string[];

  @IsDateString()
  startDate: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsBoolean()
  @IsOptional()
  current?: boolean;
}

class EducationDto {
  @IsString()
  institution: string;

  @IsString()
  degree: string;

  @IsString()
  @IsOptional()
  field?: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;
}

class SkillDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  @IsOptional()
  level?: number;
}

export class CreateResumeDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @IsOptional()
  summary?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  website?: string;

  @IsString()
  @IsOptional()
  github?: string;

  @IsString()
  @IsOptional()
  linkedin?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExperienceDto)
  @IsOptional()
  experiences?: ExperienceDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EducationDto)
  @IsOptional()
  education?: EducationDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SkillDto)
  @IsOptional()
  skills?: SkillDto[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  certifications?: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
