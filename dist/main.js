"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Neuro API')
        .setDescription('Neuro services API description')
        .setVersion('1.0')
        .addTag('Neuro API endpoints')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/doc', app, document);
    app.enableCors();
    await app.listen(3000, '0.0.0.0');
    common_1.Logger.warn(`Neuro server API is running on: ${await app.getUrl()}`, '⚡ServerStarted ⚡');
    common_1.Logger.warn(`See the Neuro API doc at : ${await app.getUrl()}/api/doc`, 'NeuroSwaggerApiDoc');
}
bootstrap();
//# sourceMappingURL=main.js.map