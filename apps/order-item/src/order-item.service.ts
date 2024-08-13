import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderItemService {
  getHello(): string {
    return 'Hello World!';
  }
}
