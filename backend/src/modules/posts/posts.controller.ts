import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("posts")
@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "포스트 생성" })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: "포스트 목록 조회" })
  findAll(
    @Query("page") page?: number,
    @Query("limit") limit?: number,
    @Query("category") category?: string,
    @Query("tag") tag?: string,
  ) {
    return this.postsService.findAll({ page, limit, category, tag });
  }

  @Get(":slug")
  @ApiOperation({ summary: "포스트 상세 조회" })
  findOne(@Param("slug") slug: string) {
    return this.postsService.findBySlug(slug);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "포스트 수정" })
  update(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "포스트 삭제" })
  remove(@Param("id") id: string) {
    return this.postsService.remove(id);
  }
}
