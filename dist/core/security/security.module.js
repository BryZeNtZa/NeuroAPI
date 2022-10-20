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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyConfig = exports.jwtModuleConfigured = void 0;
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const passport_jwt_1 = require("passport-jwt");
const constants_1 = require("../../config/constants");
const common_1 = require("@nestjs/common");
exports.jwtModuleConfigured = jwt_1.JwtModule.registerAsync({
    imports: [config_1.ConfigModule, passport_1.PassportModule, jwt_1.JwtModule],
    useFactory: async (configService) => ({
        secret: configService.get(constants_1.SECURITY_KEY),
        signOptions: {
            expiresIn: `${configService.get(constants_1.SECURITY_KEY_EXPIRES)}s`,
        },
    }),
    inject: [config_1.ConfigService],
});
let StrategyConfig = class StrategyConfig {
    constructor(configService) {
        this.configService = configService;
    }
    get() {
        return {
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: this.configService.get(constants_1.SECURITY_KEY),
        };
    }
};
StrategyConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], StrategyConfig);
exports.StrategyConfig = StrategyConfig;
//# sourceMappingURL=security.module.js.map