"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const config_service_1 = require("../common/constants/config/config.service");
exports.databaseProviders = [
    {
        provide: typeorm_1.DataSource,
        inject: [config_service_1.ConfigService],
        useFactory: async (configService) => {
            const dataSource = new typeorm_1.DataSource({
                type: configService.getDatabaseConfig().dialect,
                host: configService.getDatabaseConfig().host,
                port: configService.getDatabaseConfig().port,
                username: configService.getDatabaseConfig().username,
                password: configService.getDatabaseConfig().password,
                database: configService.getDatabaseConfig().database,
                entities: [
                    __dirname.split('database')[0] + 'modules/**/entities/**.entity{.ts,.js}',
                ],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.provider.js.map