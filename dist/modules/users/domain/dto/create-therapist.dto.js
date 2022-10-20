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
exports.CreateTherapistDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("./create-user.dto");
class CreateTherapistDto extends create_user_dto_1.CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID of the Therapist',
        required: false,
        default: '',
    }),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Therapist's avalability",
        isArray: true,
        required: false,
        default: '',
    }),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "availability_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        description: "Therapist's specializations",
        isArray: true,
        required: false,
        default: [],
    }),
    __metadata("design:type", Array)
], CreateTherapistDto.prototype, "specializations", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(1000),
    (0, swagger_1.ApiProperty)({
        description: 'Therapist bio',
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is the therapist officially approved',
        required: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], CreateTherapistDto.prototype, "approve", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Therapist insurance id',
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "insurance_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fees payable',
        required: false,
        default: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTherapistDto.prototype, "fee", void 0);
exports.CreateTherapistDto = CreateTherapistDto;
//# sourceMappingURL=create-therapist.dto.js.map