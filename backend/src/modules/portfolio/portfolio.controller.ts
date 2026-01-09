import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { PortfolioService } from "./portfolio.service";
import { CreatePortfolioDto } from "./dto/create-portfolio.dto";
import { UpdatePortfolioDto } from "./dto/update-portfolio.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("portfolio")
@Controller("portfolio")
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "포트폴리오 생성" })
  create(@Body() createPortfolioDto: CreatePortfolioDto) {
    return this.portfolioService.create(createPortfolioDto);
  }

  @Get()
  @ApiOperation({ summary: "포트폴리오 목록 조회" })
  findAll() {
    return this.portfolioService.findAll();
  }

  @Get("featured")
  @ApiOperation({ summary: "주요 포트폴리오 조회" })
  findFeatured() {
    return this.portfolioService.findFeatured();
  }

  @Get(":id")
  @ApiOperation({ summary: "포트폴리오 상세 조회" })
  findOne(@Param("id") id: string) {
    return this.portfolioService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "포트폴리오 수정" })
  update(
    @Param("id") id: string,
    @Body() updatePortfolioDto: UpdatePortfolioDto,
  ) {
    return this.portfolioService.update(id, updatePortfolioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "포트폴리오 삭제" })
  remove(@Param("id") id: string) {
    return this.portfolioService.remove(id);
  }
}
