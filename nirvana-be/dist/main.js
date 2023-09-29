"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const CORS_ALLOWED_ORIGINS = process.env?.CORS_ALLOWED_ORIGINS || 'localhost';
    const allowedOrigins = CORS_ALLOWED_ORIGINS.split(' ').map((url) => new RegExp(url));
    app.enableCors({ origin: allowedOrigins, credentials: true });
    await app.listen(process.env.PORT || 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map