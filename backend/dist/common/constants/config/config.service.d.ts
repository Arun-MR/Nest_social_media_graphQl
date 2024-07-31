import { ConfigService as DefaultConfigService } from '@nestjs/config';
export declare class ConfigService {
    private readonly defaultConfigService;
    constructor(defaultConfigService: DefaultConfigService);
    ENVIRONMENT: {
        DEVELOPMENT: string;
        TEST: string;
        PRODUCTION: string;
    };
    PORT: number;
    SECRET_TOKENS: {
        JWT_SECRET: string;
        JWT_EXPIRES_IN: string;
    };
    readonly development: {
        username: string;
        password: string;
        database: string;
        host: string;
        port: number;
        dialect: "postgres";
    };
    readonly test: {
        username: string;
        password: string;
        database: string;
        host: string;
        port: number;
        dialect: "postgres";
    };
    readonly production: {
        username: string;
        password: string;
        database: string;
        host: string;
        port: number;
        dialect: "postgres";
    };
    getDatabaseConfig(): {
        username: string;
        password: string;
        database: string;
        host: string;
        port: number;
        dialect: "postgres";
    };
}
