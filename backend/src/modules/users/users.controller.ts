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
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('users')
@ApiBearerAuth('access-token')
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: '사용자 생성' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: '사용자 목록 조회' })
  findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    return this.usersService.findAll({ page, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: '사용자 상세 조회' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '사용자 정보 수정' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch(':id/password')
  @ApiOperation({ summary: '비밀번호 변경' })
  updatePassword(
    @Param('id') id: string,
    @Body('password') password: string,
  ) {
    return this.usersService.updatePassword(id, password);
  }

  @Patch(':id/toggle-active')
  @ApiOperation({ summary: '사용자 활성화/비활성화 토글' })
  toggleActive(@Param('id') id: string) {
    return this.usersService.toggleActive(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: '사용자 삭제' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
