import { Test, TestingModule } from '@nestjs/testing';
import { OrderPaymentMethodsService } from './order-payment-methods.service';

describe('OrderPaymentMethodsService', () => {
  let service: OrderPaymentMethodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderPaymentMethodsService],
    }).compile();

    service = module.get<OrderPaymentMethodsService>(OrderPaymentMethodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
