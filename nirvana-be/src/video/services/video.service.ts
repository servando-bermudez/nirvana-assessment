import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from '../entities/video.entity';
import { Repository } from 'typeorm';
import { CreateVideoDto, UpdateVideoDto } from '../dtos/video.dto';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private readonly video_repository: Repository<Video>,
  ) {}

  get = async (id: number): Promise<Video> => {
    const video = await this.video_repository.findOne({ where: { id } });

    if (!video) {
      throw new NotFoundException(`Video #${id} not found`);
    }

    return video;
  };

  create = async (payload: CreateVideoDto): Promise<Video> => {
    const video = this.video_repository.create(payload);

    try {
      return await this.video_repository.save(video);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  };

  update = async (
    id: number,
    payload: Partial<UpdateVideoDto>,
  ): Promise<Video> => {
    const video = await this.video_repository.findOne({ where: { id } });

    if (!video) {
      throw new NotFoundException(`Video #${id} not found`);
    }

    try {
      await this.video_repository.update(id, payload);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return this.get(id);
  };

  delete = async (id: number): Promise<{ deleted: boolean }> => {
    const video = await this.video_repository.findOne({ where: { id } });

    if (!video) {
      throw new NotFoundException(`Video #${id} not found`);
    }

    try {
      await this.video_repository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return { deleted: true };
  };

  find_all = async (): Promise<Video[]> => {
    return await this.video_repository.find({
      order: { updated_at: 'DESC', created_at: 'DESC' },
    });
  };
}
