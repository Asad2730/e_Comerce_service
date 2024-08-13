import { Controller, Get } from '@nestjs/common';
import { OrderItemService } from './order-item.service';

@Controller()
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Get()
  getHello(): string {
    return this.orderItemService.getHello();
  }
}
