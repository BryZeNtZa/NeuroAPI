"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeuroModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const disorder_schema_1 = require("./domain/schemas/disorder.schema");
const diagnosis_schema_1 = require("./domain/schemas/diagnosis.schema");
const treatment_schema_1 = require("./domain/schemas/treatment.schema");
const disorders_controller_1 = require("./controllers/disorders.controller");
const diagnosis_controller_1 = require("./controllers/diagnosis.controller");
const treatment_controller_1 = require("./controllers/treatment.controller");
const disorders_repository_1 = require("./repository/disorders.repository");
const diagnosis_repository_1 = require("./repository/diagnosis.repository");
const treatment_repository_1 = require("./repository/treatment.repository");
const disorders_service_1 = require("./services/disorders.service");
const diagnosis_service_1 = require("./services/diagnosis.service");
const treatment_service_1 = require("./services/treatment.service");
let NeuroModule = class NeuroModule {
};
NeuroModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            mongoose_1.MongooseModule.forFeature([
                { name: disorder_schema_1.Disorder.name, schema: disorder_schema_1.DisorderSchema },
                { name: diagnosis_schema_1.Diagnosis.name, schema: diagnosis_schema_1.DiagnosisSchema },
                { name: treatment_schema_1.Treatment.name, schema: treatment_schema_1.TreatmentSchema },
            ]),
        ],
        controllers: [disorders_controller_1.DisordersController, diagnosis_controller_1.DiagnosisController, treatment_controller_1.TreatmentController],
        providers: [
            disorders_repository_1.DisordersRepository,
            diagnosis_repository_1.DiagnosisRepository,
            treatment_repository_1.TreatmentRepository,
            disorders_service_1.DisordersService,
            diagnosis_service_1.DiagnosisService,
            treatment_service_1.TreatmentService,
        ],
    })
], NeuroModule);
exports.NeuroModule = NeuroModule;
//# sourceMappingURL=neuro.module.js.map