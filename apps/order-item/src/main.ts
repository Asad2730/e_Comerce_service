import { NestFactory } from '@nestjs/core';
import { OrderItemModule } from './order-item.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderItemModule);
  await app.listen(3000);
}
bootstrap();
