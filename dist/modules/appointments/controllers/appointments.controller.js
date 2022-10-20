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
exports.AppointmentsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../users/auth/guards/jwt-auth.guard");
const roles_decorator_1 = require("../../users/auth/roles.decorator");
const role_enum_1 = require("../../users/domain/types/role.enum");
const create_appointment_dto_1 = require("../domain/dto/create-appointment.dto");
const update_appointment_dto_1 = require("../domain/dto/update-appointment.dto");
const appointment_schema_1 = require("../domain/schemas/appointment.schema");
const appointments_service_1 = require("../services/appointments.service");
const mongo_exception_filter_1 = require("../../../core/exceptions/filters/mongo-exception.filter");
const swagger_1 = require("@nestjs/swagger");
let AppointmentsController = class AppointmentsController {
    constructor(appointmentdService) {
        this.appointmentdService = appointmentdService;
    }
    async index() {
        return 'Hello appointments API';
    }
    async getById(id) {
        return this.appointmentdService.getById(id);
    }
    async list(page) {
        return this.appointmentdService.getList(page);
    }
    async create(createAppointmentDto) {
        return this.appointmentdService.create(createAppointmentDto);
    }
    async update(id, updateAppointmentDto) {
        return this.appointmentdService.update(id, updateAppointmentDto);
    }
    async delete(id) {
        return this.appointmentdService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: appointment_schema_1.Appointment,
        description: 'Fetched appointment',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        type: [appointment_schema_1.Appointment],
        description: 'List of users',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/list/:page'),
    __param(0, (0, common_1.Param)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        type: appointment_schema_1.Appointment,
        description: 'Created appointment',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: appointment_schema_1.Appointment,
        description: 'Updated user',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.UseFilters)(mongo_exception_filter_1.MongoExceptionFilter),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_appointment_dto_1.UpdateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: appointment_schema_1.Appointment,
        description: 'Deleted user',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Patch)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "delete", null);
AppointmentsController = __decorate([
    (0, common_1.Controller)('appointments'),
    __metadata("design:paramtypes", [appointments_service_1.AppointmentsService])
], AppointmentsController);
exports.AppointmentsController = AppointmentsController;
//# sourceMappingURL=appointments.controller.js.map