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
exports.CreateTreatmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
class CreateTreatmentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Parent disorder',
        required: false,
        default: 0,
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateTreatmentDto.prototype, "parent_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Parent disorder',
        required: false,
        default: 0,
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateTreatmentDto.prototype, "therapist_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the disorder',
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], CreateTreatmentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Useful note id',
        required: false,
        default: 0,
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateTreatmentDto.prototype, "note_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Useful note',
        required: false,
        default: 0,
    }),
    __metadata("design:type", String)
], CreateTreatmentDto.prototype, "note", void 0);
exports.CreateTreatmentDto = CreateTreatmentDto;
//# sourceMappingURL=create-treatment.dto.js.map