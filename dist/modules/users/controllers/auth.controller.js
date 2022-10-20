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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const local_auth_guard_1 = require("../auth/guards/local-auth.guard");
const register_user_dto_1 = require("../domain/dto/register-user.dto");
const auth_credentials_dto_1 = require("../domain/dto/auth-credentials.dto");
const user_schema_1 = require("../domain/schemas/user.schema");
const auth_service_1 = require("../services/auth.service");
const mongo_exception_filter_1 = require("../../../core/exceptions/filters/mongo-exception.filter");
const auth_jwt_token_dto_1 = require("../domain/dto/auth-jwt-token.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async token(req) {
        return this.authService.token(req.user);
    }
    async register(createUserDto) {
        return this.authService.register(createUserDto);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({ type: auth_credentials_dto_1.AuthCredentialsDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        type: auth_jwt_token_dto_1.JwtTokenResponse,
        description: 'Auth token created',
    }),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/token'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "token", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: register_user_dto_1.RegisterUserDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        type: user_schema_1.User,
        description: 'User registered successfully',
    }),
    (0, common_1.Post)('/register'),
    (0, common_1.UseFilters)(mongo_exception_filter_1.MongoExceptionFilter),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map