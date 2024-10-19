import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Class Validator
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Test Assessment Develops Today')
    .setDescription('Test Assessment Develops Today API documentation')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  const configService = app.get(ConfigService);

  const port = configService.get<string>('PORT');

  await app.listen(process.env.PORT ?? 3000).then(() => {
    console.log(`
      http://localhost:${port}
      http://localhost:${port}/docs
      `);
  });
}
bootstrap();
