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
exports.PatientSchema = exports.Patient = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
let Patient = class Patient {
};
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Patient.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: user_schema_1.User.name, unique: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Patient.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Patient.prototype, "age", void 0);
Patient = __decorate([
    (0, mongoose_1.Schema)()
], Patient);
exports.Patient = Patient;
exports.PatientSchema = mongoose_1.SchemaFactory.createForClass(Patient);
//# sourceMappingURL=patient.schema.js.map