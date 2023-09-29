"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data_source = void 0;
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)({ path: '.env' });
const data_source_options = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    cache: true,
    logging: ['error'],
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*.{ts,js}'],
};
exports.default = (0, config_1.registerAs)('typeorm', () => data_source_options);
exports.data_source = new typeorm_1.DataSource(data_source_options);
//# sourceMappingURL=typeorm.js.map