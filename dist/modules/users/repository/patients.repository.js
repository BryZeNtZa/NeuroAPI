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
exports.PatientsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const patient_schema_1 = require("../domain/schemas/patient.schema");
let PatientsRepository = class PatientsRepository {
    constructor(model) {
        this.model = model;
    }
    async findOne(patientFilterQuery) {
        return this.model.findOne(patientFilterQuery);
    }
    async find(patientsFilterQuery) {
        return this.model.find(patientsFilterQuery);
    }
    async create(patient) {
        const newPatient = new this.model(patient);
        return newPatient.save();
    }
    async findOneAndUpdate(patientFilterQuery, patient) {
        return this.model.findOneAndUpdate(patientFilterQuery, patient, {
            new: true,
        });
    }
    async update(id, patient) {
        return await this.model.findByIdAndUpdate(id, patient).exec();
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id).exec();
    }
};
PatientsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(patient_schema_1.Patient.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PatientsRepository);
exports.PatientsRepository = PatientsRepository;
//# sourceMappingURL=patients.repository.js.map