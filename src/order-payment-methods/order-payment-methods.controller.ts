import { Body, Controller, Post } from '@nestjs/common';
import { OrderPaymentMethodsService } from './order-payment-methods.service';
import { CreateOrderPaymentDTOMethod } from './dto/create-order-payment-method.dto';

@Controller('order-payment-methods')
export class OrderPaymentMethodsController {
  constructor(
    private readonly orderPaymentMethodsService: OrderPaymentMethodsService,
  ) {}

  @Post()
  create(@Body() data: CreateOrderPaymentDTOMethod) {
    return this.orderPaymentMethodsService.execute(data);
  }
}
