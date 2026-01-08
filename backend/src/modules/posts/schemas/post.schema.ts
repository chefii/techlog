import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  excerpt: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop()
  category: string;

  @Prop()
  thumbnail: string;

  @Prop({ default: false })
  published: boolean;

  @Prop({ default: 0 })
  viewCount: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
