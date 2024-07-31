import { DataSource } from 'typeorm';
import { ConfigService } from '../common/constants/config/config.service';
export declare const databaseProviders: {
    provide: typeof DataSource;
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => Promise<DataSource>;
}[];
