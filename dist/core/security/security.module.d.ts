import { ConfigService } from '@nestjs/config';
export declare const jwtModuleConfigured: import("@nestjs/common").DynamicModule;
export declare class StrategyConfig {
    private configService;
    constructor(configService: ConfigService);
    get(): any;
}
