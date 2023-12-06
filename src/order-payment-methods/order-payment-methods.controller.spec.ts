import { Test, TestingModule } from '@nestjs/testing';
import { OrderPaymentMethodsController } from './order-payment-methods.controller';
import { OrderPaymentMethodsService } from './order-payment-methods.service';

describe('OrderPaymentMethodsController', () => {
  let controller: OrderPaymentMethodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderPaymentMethodsController],
      providers: [OrderPaymentMethodsService],
    }).compile();

    controller = module.get<OrderPaymentMethodsController>(OrderPaymentMethodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
