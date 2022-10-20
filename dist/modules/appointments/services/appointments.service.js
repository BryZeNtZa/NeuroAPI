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
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const appointments_repository_1 = require("../repository/appointments.repository");
let AppointmentsService = class AppointmentsService {
    constructor(appointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }
    async getById(id) {
        return this.appointmentsRepository.findOne({ id });
    }
    async getList(page) {
        console.log(page);
        return this.appointmentsRepository.find({});
    }
    async create(dto) {
        return this.appointmentsRepository.create(dto);
    }
    async update(id, dto) {
        return this.appointmentsRepository.findOneAndUpdate({ id }, dto);
    }
    async delete(id) {
        return this.appointmentsRepository.delete(id);
    }
};
AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [appointments_repository_1.AppointementsRepository])
], AppointmentsService);
exports.AppointmentsService = AppointmentsService;
//# sourceMappingURL=appointments.service.js.map