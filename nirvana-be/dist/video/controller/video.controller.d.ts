import { VideoService } from '../services/video.service';
import { Video } from '../entities/video.entity';
import { CreateVideoDto, UpdateVideoDto } from '../dtos/video.dto';
export declare class VideoController {
    private readonly video_service;
    constructor(video_service: VideoService);
    find_all(): Promise<Video[]>;
    get(id: number): Promise<Video>;
    create(payload: CreateVideoDto): Promise<Video>;
    update(id: number, payload: UpdateVideoDto): Promise<Video>;
    delete(id: number): Promise<{
        deleted: boolean;
    }>;
}
