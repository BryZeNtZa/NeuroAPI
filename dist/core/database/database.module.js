"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseModuleConfigured = void 0;
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../../config/constants");
exports.mongooseModuleConfigured = mongoose_1.MongooseModule.forRootAsync({
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => ({
        uri: configService.get(constants_1.DATABASE_URI),
    }),
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=database.module.js.map