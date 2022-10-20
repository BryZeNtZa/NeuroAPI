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
exports.TherapistSchema = exports.Therapist = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const availability_schema_1 = require("../../../common/domain/schemas/availability.schema");
const insurance_schema_1 = require("../../../common/domain/schemas/insurance.schema");
const specialization_schema_1 = require("../../../common/domain/schemas/specialization.schema");
const user_schema_1 = require("./user.schema");
let Therapist = class Therapist {
};
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Therapist.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ unique: true, type: mongoose_2.SchemaTypes.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", String)
], Therapist.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: availability_schema_1.Availability.name }),
    __metadata("design:type", String)
], Therapist.prototype, "availability_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Therapist's specializations",
        isArray: true,
        required: false,
        default: [],
    }),
    (0, mongoose_1.Prop)({ type: [mongoose_2.SchemaTypes.ObjectId], ref: specialization_schema_1.Specialization.name }),
    __metadata("design:type", Array)
], Therapist.prototype, "specializations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: insurance_schema_1.Insurance.name }),
    __metadata("design:type", String)
], Therapist.prototype, "insurance_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Therapist.prototype, "approve", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Therapist.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Therapist.prototype, "fee", void 0);
Therapist = __decorate([
    (0, mongoose_1.Schema)()
], Therapist);
exports.Therapist = Therapist;
exports.TherapistSchema = mongoose_1.SchemaFactory.createForClass(Therapist);
//# sourceMappingURL=therapist.schema.js.map