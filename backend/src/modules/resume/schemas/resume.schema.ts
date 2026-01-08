import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResumeDocument = Resume & Document;

@Schema()
class Experience {
  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  position: string;

  @Prop()
  description: string;

  @Prop({ type: [String], default: [] })
  achievements: string[];

  @Prop({ required: true })
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop({ default: false })
  current: boolean;
}

@Schema()
class Education {
  @Prop({ required: true })
  institution: string;

  @Prop({ required: true })
  degree: string;

  @Prop()
  field: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop()
  endDate: Date;
}

@Schema()
class Skill {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ min: 1, max: 5 })
  level: number;
}

@Schema({ timestamps: true })
export class Resume {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  summary: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  location: string;

  @Prop()
  website: string;

  @Prop()
  github: string;

  @Prop()
  linkedin: string;

  @Prop({ type: [Object], default: [] })
  experiences: Experience[];

  @Prop({ type: [Object], default: [] })
  education: Education[];

  @Prop({ type: [Object], default: [] })
  skills: Skill[];

  @Prop({ type: [String], default: [] })
  certifications: string[];

  @Prop({ default: true })
  isActive: boolean;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
