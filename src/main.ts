import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT: number = 3000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(PORT);
  console.log(`Application is running on: http://127.0.0.1:3000${PORT}`);
}
bootstrap();
