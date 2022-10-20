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
exports.DisordersRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const disorder_schema_1 = require("../domain/schemas/disorder.schema");
let DisordersRepository = class DisordersRepository {
    constructor(model) {
        this.model = model;
    }
    async findOne(disorderFilterQuery) {
        return this.model.findOne(disorderFilterQuery);
    }
    async find(disordersFilterQuery) {
        return this.model.find(disordersFilterQuery);
    }
    async create(disorder) {
        const newUser = new this.model(disorder);
        return newUser.save();
    }
    async findOneAndUpdate(disorderFilterQuery, disorder) {
        return this.model.findOneAndUpdate(disorderFilterQuery, disorder, {
            new: true,
        });
    }
    async update(id, disorder) {
        return await this.model.findByIdAndUpdate(id, disorder).exec();
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id).exec();
    }
};
DisordersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(disorder_schema_1.Disorder.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DisordersRepository);
exports.DisordersRepository = DisordersRepository;
//# sourceMappingURL=disorders.repository.js.map