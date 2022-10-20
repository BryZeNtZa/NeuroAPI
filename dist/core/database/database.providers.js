"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configService) => {
            return await mongoose.connect(configService.get('database.uri'));
        },
    },
];
//# sourceMappingURL=database.providers.js.map