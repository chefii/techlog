import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './schemas/portfolio.schema';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name)
    private portfolioModel: Model<PortfolioDocument>,
  ) {}

  async create(createPortfolioDto: CreatePortfolioDto): Promise<Portfolio> {
    const createdPortfolio = new this.portfolioModel(createPortfolioDto);
    return createdPortfolio.save();
  }

  async findAll(): Promise<Portfolio[]> {
    return this.portfolioModel.find().sort({ order: 1, createdAt: -1 }).exec();
  }

  async findFeatured(): Promise<Portfolio[]> {
    return this.portfolioModel
      .find({ featured: true })
      .sort({ order: 1 })
      .exec();
  }

  async findOne(id: string): Promise<Portfolio> {
    const portfolio = await this.portfolioModel.findById(id).exec();
    if (!portfolio) {
      throw new NotFoundException(`Portfolio with ID "${id}" not found`);
    }
    return portfolio;
  }

  async update(
    id: string,
    updatePortfolioDto: UpdatePortfolioDto,
  ): Promise<Portfolio> {
    const updatedPortfolio = await this.portfolioModel
      .findByIdAndUpdate(id, updatePortfolioDto, { new: true })
      .exec();
    if (!updatedPortfolio) {
      throw new NotFoundException(`Portfolio with ID "${id}" not found`);
    }
    return updatedPortfolio;
  }

  async remove(id: string): Promise<void> {
    const result = await this.portfolioModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Portfolio with ID "${id}" not found`);
    }
  }
}
