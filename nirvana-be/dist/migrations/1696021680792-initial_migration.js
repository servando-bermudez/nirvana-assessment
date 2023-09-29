"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1696021680792 = void 0;
class InitialMigration1696021680792 {
    constructor() {
        this.name = 'InitialMigration1696021680792';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`video\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`query-result-cache\` (\`id\` int NOT NULL AUTO_INCREMENT, \`identifier\` varchar(255) NULL, \`time\` bigint NOT NULL, \`duration\` int NOT NULL, \`query\` text NOT NULL, \`result\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`query-result-cache\``);
        await queryRunner.query(`DROP TABLE \`video\``);
    }
}
exports.InitialMigration1696021680792 = InitialMigration1696021680792;
//# sourceMappingURL=1696021680792-initial_migration.js.map