import { Module } from '@nestjs/common';
import { VideoController } from './controller/video.controller';
import { VideoService } from './services/video.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './entities/video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
