"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const config_1 = require("@nestjs/config");
const database_config_1 = require("./database.config");
const security_config_1 = require("./security.config");
exports.configs = config_1.ConfigModule.forRoot({
    load: [database_config_1.default, security_config_1.default],
});
//# sourceMappingURL=all.config.js.map