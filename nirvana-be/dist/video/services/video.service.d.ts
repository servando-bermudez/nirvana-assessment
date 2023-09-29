import { Video } from '../entities/video.entity';
import { Repository } from 'typeorm';
import { CreateVideoDto, UpdateVideoDto } from '../dtos/video.dto';
export declare class VideoService {
    private readonly video_repository;
    constructor(video_repository: Repository<Video>);
    get: (id: number) => Promise<Video>;
    create: (payload: CreateVideoDto) => Promise<Video>;
    update: (id: number, payload: Partial<UpdateVideoDto>) => Promise<Video>;
    delete: (id: number) => Promise<{
        deleted: boolean;
    }>;
    find_all: () => Promise<Video[]>;
}
