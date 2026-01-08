import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resume, ResumeDocument } from './schemas/resume.schema';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>,
  ) {}

  async create(createResumeDto: CreateResumeDto): Promise<Resume> {
    const createdResume = new this.resumeModel(createResumeDto);
    return createdResume.save();
  }

  async findActive(): Promise<Resume> {
    const resume = await this.resumeModel.findOne({ isActive: true }).exec();
    if (!resume) {
      throw new NotFoundException('Active resume not found');
    }
    return resume;
  }

  async findOne(id: string): Promise<Resume> {
    const resume = await this.resumeModel.findById(id).exec();
    if (!resume) {
      throw new NotFoundException(`Resume with ID "${id}" not found`);
    }
    return resume;
  }

  async update(id: string, updateResumeDto: UpdateResumeDto): Promise<Resume> {
    const updatedResume = await this.resumeModel
      .findByIdAndUpdate(id, updateResumeDto, { new: true })
      .exec();
    if (!updatedResume) {
      throw new NotFoundException(`Resume with ID "${id}" not found`);
    }
    return updatedResume;
  }

  async remove(id: string): Promise<void> {
    const result = await this.resumeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Resume with ID "${id}" not found`);
    }
  }
}
