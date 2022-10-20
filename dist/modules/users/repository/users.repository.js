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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../domain/schemas/user.schema");
let UsersRepository = class UsersRepository {
    constructor(model) {
        this.model = model;
    }
    async findOne(userFilterQuery) {
        common_1.Logger.log('Request received : ', userFilterQuery);
        return this.model.findOne(userFilterQuery);
    }
    async find(usersFilterQuery) {
        return this.model.find(usersFilterQuery);
    }
    async create(user) {
        const newUser = new this.model(user);
        return newUser.save();
    }
    async findOneAndUpdate(userFilterQuery, user) {
        return this.model.findOneAndUpdate(userFilterQuery, user, {
            new: true,
        });
    }
    async update(id, user) {
        return await this.model.findByIdAndUpdate(id, user).exec();
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id).exec();
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map