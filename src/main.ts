import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Neuro API')
    .setDescription('Neuro services API description')
    .setVersion('1.0')
    .addTag('neuro')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/doc', app, document);

  await app.listen(3000);
  Logger.warn(
    `Neuro server API is running on: ${await app.getUrl()}`,
    '⚡ServerStarted ⚡',
  );
  Logger.warn(
    `See the Neuro API doc at : ${await app.getUrl()}/api/doc`,
    'NeuroSwaggerApiDoc',
  );
}
bootstrap();
