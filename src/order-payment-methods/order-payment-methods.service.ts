import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderPaymentMethod } from 'src/shared/entities/orderPaymentMethod.entity';
import { Repository } from 'typeorm';
import { CreateOrderPaymentDTOMethod } from './dto/create-order-payment-method.dto';

@Injectable()
export class OrderPaymentMethodsService {
  constructor(
    @InjectRepository(OrderPaymentMethod)
    private OrderPaymentMethodRepo: Repository<OrderPaymentMethod>,
  ) {}

  async execute(data: CreateOrderPaymentDTOMethod): Promise<void> {
    const orderPaymentMethod = new OrderPaymentMethod(data);
    await this.OrderPaymentMethodRepo.save(orderPaymentMethod);
  }
}
