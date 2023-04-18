import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //===> Configuracion global de validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //=> Admite solo lo q esta definido en el dto
      forbidNonWhitelisted: true, //==> Obliga a enviar solo data real
    }),
  );
  await app.listen(3000);
}
bootstrap();
