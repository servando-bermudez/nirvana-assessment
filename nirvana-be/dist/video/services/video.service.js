"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const video_entity_1 = require("../entities/video.entity");
const typeorm_2 = require("typeorm");
let VideoService = class VideoService {
    constructor(video_repository) {
        this.video_repository = video_repository;
        this.get = async (id) => {
            const video = await this.video_repository.findOne({ where: { id } });
            if (!video) {
                throw new common_1.NotFoundException(`Video #${id} not found`);
            }
            return video;
        };
        this.create = async (payload) => {
            const video = this.video_repository.create(payload);
            try {
                return await this.video_repository.save(video);
            }
            catch (error) {
                throw new common_1.InternalServerErrorException(error);
            }
        };
        this.update = async (id, payload) => {
            const video = await this.video_repository.findOne({ where: { id } });
            if (!video) {
                throw new common_1.NotFoundException(`Video #${id} not found`);
            }
            try {
                await this.video_repository.update(id, payload);
            }
            catch (error) {
                throw new common_1.InternalServerErrorException(error);
            }
            return this.get(id);
        };
        this.delete = async (id) => {
            const video = await this.video_repository.findOne({ where: { id } });
            if (!video) {
                throw new common_1.NotFoundException(`Video #${id} not found`);
            }
            try {
                await this.video_repository.softDelete(id);
            }
            catch (error) {
                throw new common_1.InternalServerErrorException(error);
            }
            return { deleted: true };
        };
        this.find_all = async () => {
            return await this.video_repository.find({
                order: { updated_at: 'DESC', created_at: 'DESC' },
            });
        };
    }
};
exports.VideoService = VideoService;
exports.VideoService = VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(video_entity_1.Video)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VideoService);
//# sourceMappingURL=video.service.js.map