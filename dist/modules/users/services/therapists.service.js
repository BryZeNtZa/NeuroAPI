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
exports.TherapistsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const users_repository_1 = require("../repository/users.repository");
const therapists_repository_1 = require("../repository/therapists.repository");
let TherapistsService = class TherapistsService {
    constructor(usersRepository, therapistsRepository, connection) {
        this.usersRepository = usersRepository;
        this.therapistsRepository = therapistsRepository;
        this.connection = connection;
    }
    async getById(id) {
        return this.therapistsRepository.findOne({ id });
    }
    async getByUserId(id) {
        return this.therapistsRepository.findOne({ user_id: id });
    }
    async getTherapists(page) {
        console.log(page);
        return this.therapistsRepository.find({});
    }
    async create(dto) {
        const session = await this.connection.startSession();
        session.startTransaction();
        try {
            const userCreateDto = dto;
            await this.usersRepository.create(userCreateDto);
            const therapist = this.therapistsRepository.create(dto);
            await session.commitTransaction();
            return therapist;
        }
        catch (e) {
            await session.abortTransaction();
            throw e;
        }
        finally {
            session.endSession();
        }
    }
    async update(id, dto) {
        const userUpdateDto = dto;
        const session = await this.connection.startSession();
        session.startTransaction();
        try {
            await this.usersRepository.update(dto.user_id, userUpdateDto);
            return this.therapistsRepository.update(id, dto);
        }
        catch (e) {
            await session.abortTransaction();
            throw e;
        }
        finally {
            session.endSession();
        }
    }
    async delete(id) {
        const session = await this.connection.startSession();
        session.startTransaction();
        try {
            const therapist = await this.therapistsRepository.findOne({ _id: id });
            if (!therapist) {
                throw new Error('Therapist not found !');
            }
            this.usersRepository.delete(id);
            return this.therapistsRepository.delete(id);
        }
        catch (e) {
            await session.abortTransaction();
            throw e;
        }
        finally {
            session.endSession();
        }
    }
};
TherapistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        therapists_repository_1.TherapistsRepository, mongoose.Connection])
], TherapistsService);
exports.TherapistsService = TherapistsService;
//# sourceMappingURL=therapists.service.js.map