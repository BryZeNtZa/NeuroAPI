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
exports.CreateDiagnosisDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
class CreateDiagnosisDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Patient id being diagnosed',
        type: String,
        required: false,
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateDiagnosisDto.prototype, "patient_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Therapist id who performed the diagnosis',
        type: String,
        required: false,
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateDiagnosisDto.prototype, "therapist_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Disorder diagnosed',
        type: String,
        required: false,
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateDiagnosisDto.prototype, "disorder_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date of the diagnostic',
        type: String,
        required: false,
    }),
    __metadata("design:type", Date)
], CreateDiagnosisDto.prototype, "date", void 0);
exports.CreateDiagnosisDto = CreateDiagnosisDto;
//# sourceMappingURL=create-diagnosis.dto.js.map