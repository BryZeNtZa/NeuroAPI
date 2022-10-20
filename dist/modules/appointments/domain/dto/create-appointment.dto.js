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
exports.CreateAppointmentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const timeslot_enum_1 = require("../types/timeslot.enum");
const appointment_status_enum_1 = require("../types/appointment-status.enum");
const mongoose_1 = require("mongoose");
class CreateAppointmentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date of the appointment',
        type: Date,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], CreateAppointmentDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Therapist of the appointment',
        required: true,
        type: String,
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateAppointmentDto.prototype, "therapist_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timeslot of the appointment',
        enum: timeslot_enum_1.Timeslot,
        enumName: 'Timeslot',
        required: true,
        default: timeslot_enum_1.Timeslot.Morning,
    }),
    (0, class_validator_1.IsEnum)(timeslot_enum_1.Timeslot),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "timeslot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Appointment status',
        enum: appointment_status_enum_1.AppointmentStatus,
        enumName: 'Status',
        isArray: false,
        required: false,
        default: appointment_status_enum_1.AppointmentStatus.Pending,
    }),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date of the appointment',
        type: String,
        required: false,
    }),
    __metadata("design:type", Date)
], CreateAppointmentDto.prototype, "start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateAppointmentDto.prototype, "end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Next appointment',
        required: false,
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateAppointmentDto.prototype, "next_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Previous appointment',
        required: false,
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateAppointmentDto.prototype, "previous_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateAppointmentDto.prototype, "note_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "note", void 0);
exports.CreateAppointmentDto = CreateAppointmentDto;
//# sourceMappingURL=create-appointment.dto.js.map