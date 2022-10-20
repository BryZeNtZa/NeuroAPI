"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const appointments_service_1 = require("./services/appointments.service");
const appointments_repository_1 = require("./repository/appointments.repository");
const appointement = require("./domain/schemas/appointment.schema");
const appointments_controller_1 = require("./controllers/appointments.controller");
let AppointmentsModule = class AppointmentsModule {
};
AppointmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: appointement.Appointment.name,
                    schema: appointement.AppointmentSchema,
                },
            ]),
        ],
        controllers: [appointments_controller_1.AppointmentsController],
        providers: [appointments_service_1.AppointmentsService, appointments_repository_1.AppointementsRepository],
    })
], AppointmentsModule);
exports.AppointmentsModule = AppointmentsModule;
//# sourceMappingURL=appointments.module.js.map