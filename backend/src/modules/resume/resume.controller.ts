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
import { ResumeService } from "./resume.service";
import { CreateResumeDto } from "./dto/create-resume.dto";
import { UpdateResumeDto } from "./dto/update-resume.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("resume")
@Controller("resume")
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "이력서 생성" })
  create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }

  @Get()
  @ApiOperation({ summary: "활성 이력서 조회" })
  findActive() {
    return this.resumeService.findActive();
  }

  @Get(":id")
  @ApiOperation({ summary: "이력서 상세 조회" })
  findOne(@Param("id") id: string) {
    return this.resumeService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "이력서 수정" })
  update(@Param("id") id: string, @Body() updateResumeDto: UpdateResumeDto) {
    return this.resumeService.update(id, updateResumeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "이력서 삭제" })
  remove(@Param("id") id: string) {
    return this.resumeService.remove(id);
  }
}
