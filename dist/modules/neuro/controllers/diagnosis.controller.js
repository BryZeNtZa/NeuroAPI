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
exports.DiagnosisController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongo_exception_filter_1 = require("../../../core/exceptions/filters/mongo-exception.filter");
const roles_decorator_1 = require("../../users/auth/roles.decorator");
const role_enum_1 = require("../../users/domain/types/role.enum");
const jwt_auth_guard_1 = require("../../users/auth/guards/jwt-auth.guard");
const diagnosis_schema_1 = require("../domain/schemas/diagnosis.schema");
const create_diagnosis_dto_1 = require("../domain/dto/create-diagnosis.dto");
const update_diagnosis_dto_1 = require("../domain/dto/update-diagnosis.dto");
const diagnosis_service_1 = require("../services/diagnosis.service");
let DiagnosisController = class DiagnosisController {
    constructor(service) {
        this.service = service;
    }
    async index() {
        return 'Hello diagnosis API';
    }
    async getDiagnosis(id) {
        return this.service.getById(id);
    }
    async list(page) {
        return this.service.getList(page);
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async update(id, dto) {
        return this.service.update(id, dto);
    }
    async delete(id) {
        return this.service.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: diagnosis_schema_1.Diagnosis,
        description: 'Fetched diagnosis',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiagnosisController.prototype, "getDiagnosis", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        type: [diagnosis_schema_1.Diagnosis],
        description: 'List of diagnosiss',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/list/:page'),
    __param(0, (0, common_1.Param)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DiagnosisController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        type: diagnosis_schema_1.Diagnosis,
        description: 'Diagnosis created',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_diagnosis_dto_1.CreateDiagnosisDto]),
    __metadata("design:returntype", Promise)
], DiagnosisController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: diagnosis_schema_1.Diagnosis,
        description: 'Diagnosis updated',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.UseFilters)(mongo_exception_filter_1.MongoExceptionFilter),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_diagnosis_dto_1.UpdateDiagnosisDto]),
    __metadata("design:returntype", Promise)
], DiagnosisController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: diagnosis_schema_1.Diagnosis,
        description: 'Diagnosis deleted ',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Patch)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiagnosisController.prototype, "delete", null);
DiagnosisController = __decorate([
    (0, common_1.Controller)('diagnosis'),
    __metadata("design:paramtypes", [diagnosis_service_1.DiagnosisService])
], DiagnosisController);
exports.DiagnosisController = DiagnosisController;
//# sourceMappingURL=diagnosis.controller.js.map