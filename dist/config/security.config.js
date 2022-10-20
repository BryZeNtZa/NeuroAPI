"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('security', () => ({
    key: process.env.API_KEY,
    expires: process.env.API_KEY_EXPIRES,
}));
//# sourceMappingURL=security.config.js.map