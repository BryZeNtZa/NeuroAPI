"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const all_config_1 = require("./config/all.config");
const database_module_1 = require("./core/database/database.module");
const users_module_1 = require("./modules/users/users.module");
const appointments_module_1 = require("./modules/appointments/appointments.module");
const billing_module_1 = require("./modules/billing/billing.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            all_config_1.configs,
            database_module_1.mongooseModuleConfigured,
            users_module_1.UsersModule,
            appointments_module_1.AppointmentsModule,
            billing_module_1.BillingModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map