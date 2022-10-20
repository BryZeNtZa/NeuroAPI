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
var Appointment_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentSchema = exports.Appointment = void 0;
const patient_schema_1 = require("../../../users/domain/schemas/patient.schema");
const therapist_schema_1 = require("../../../users/domain/schemas/therapist.schema");
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const note_schema_1 = require("../../../common/domain/schemas/note.schema");
const appointment_status_enum_1 = require("../types/appointment-status.enum");
const timeslot_enum_1 = require("../types/timeslot.enum");
let Appointment = Appointment_1 = class Appointment {
};
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Appointment.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Appointment db record date',
        required: true,
    }),
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Appointment time slot',
        enum: timeslot_enum_1.Timeslot,
        enumName: 'Timeslot',
        isArray: false,
        required: false,
        default: timeslot_enum_1.Timeslot.Morning,
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Appointment.prototype, "timeslot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: patient_schema_1.Patient.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Appointment.prototype, "patient_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Therapist of the appointment',
        required: true,
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: therapist_schema_1.Therapist.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Appointment.prototype, "therapist_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Appointment status',
        enum: appointment_status_enum_1.AppointmentStatus,
        enumName: 'Status',
        isArray: false,
        required: false,
        default: appointment_status_enum_1.AppointmentStatus.Pending,
    }),
    (0, mongoose_1.Prop)({ default: appointment_status_enum_1.AppointmentStatus.Pending }),
    __metadata("design:type", Number)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Starting time of the appointment ISO',
        required: true,
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Appointment.prototype, "start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ending time of the appointment ISO',
        required: true,
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Appointment.prototype, "end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Next appointment id',
        required: false,
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: Appointment_1.name, default: null }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Appointment.prototype, "next_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Past appointment',
        required: false,
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: Appointment_1.name, default: null }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Appointment.prototype, "previous_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Appointment note',
        required: false,
        default: null,
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: note_schema_1.Note.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Appointment.prototype, "note_id", void 0);
Appointment = Appointment_1 = __decorate([
    (0, mongoose_1.Schema)()
], Appointment);
exports.Appointment = Appointment;
exports.AppointmentSchema = mongoose_1.SchemaFactory.createForClass(Appointment);
//# sourceMappingURL=appointment.schema.js.map