import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemController } from './order-item.controller';
import { OrderItemService } from './order-item.service';

describe('OrderItemController', () => {
  let orderItemController: OrderItemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderItemController],
      providers: [OrderItemService],
    }).compile();

    orderItemController = app.get<OrderItemController>(OrderItemController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orderItemController.getHello()).toBe('Hello World!');
    });
  });
});
