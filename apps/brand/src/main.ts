import { NestFactory } from '@nestjs/core';
import { BrandModule } from './brand.module';

async function bootstrap() {
  const app = await NestFactory.create(BrandModule);
  await app.listen(3000);
}
bootstrap();
