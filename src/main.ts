import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2'); //==> Añade el prefijo a la Api

  app.useGlobalPipes(new ValidationPipe({ forbidNonWhitelisted: true })); //=> Validaciones Globales
  await app.listen(4000);
}
bootstrap();
