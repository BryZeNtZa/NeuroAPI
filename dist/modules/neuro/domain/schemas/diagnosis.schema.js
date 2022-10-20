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
exports.DiagnosisSchema = exports.Diagnosis = void 0;
const patient_schema_1 = require("../../../users/domain/schemas/patient.schema");
const therapist_schema_1 = require("../../../users/domain/schemas/therapist.schema");
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const disorder_schema_1 = require("./disorder.schema");
let Diagnosis = class Diagnosis {
};
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Diagnosis.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: patient_schema_1.Patient.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Diagnosis.prototype, "patient_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: therapist_schema_1.Therapist.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Diagnosis.prototype, "therapist_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: disorder_schema_1.Disorder.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Diagnosis.prototype, "disorder_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Diagnosis.prototype, "date", void 0);
Diagnosis = __decorate([
    (0, mongoose_1.Schema)()
], Diagnosis);
exports.Diagnosis = Diagnosis;
exports.DiagnosisSchema = mongoose_1.SchemaFactory.createForClass(Diagnosis);
//# sourceMappingURL=diagnosis.schema.js.map