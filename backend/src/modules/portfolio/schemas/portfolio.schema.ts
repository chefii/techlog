import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PortfolioDocument = Portfolio & Document;

@Schema({ timestamps: true })
export class Portfolio {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  longDescription: string;

  @Prop({ type: [String], default: [] })
  technologies: string[];

  @Prop()
  thumbnail: string;

  @Prop({ type: [String], default: [] })
  images: string[];

  @Prop()
  githubUrl: string;

  @Prop()
  demoUrl: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop({ default: false })
  featured: boolean;

  @Prop({ default: 0 })
  order: number;
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
