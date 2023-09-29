import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VideoService } from '../services/video.service';
import { Video } from '../entities/video.entity';
import { CreateVideoDto, UpdateVideoDto } from '../dtos/video.dto';

@Controller('videos')
export class VideoController {
  constructor(private readonly video_service: VideoService) {}

  @Get()
  find_all(): Promise<Video[]> {
    return this.video_service.find_all();
  }

  @Get(':id')
  get(@Param('id') id: number): Promise<Video> {
    return this.video_service.get(id);
  }

  @Post('create')
  create(@Body() payload: CreateVideoDto): Promise<Video> {
    return this.video_service.create(payload);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() payload: UpdateVideoDto,
  ): Promise<Video> {
    return this.video_service.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.video_service.delete(id);
  }
}
