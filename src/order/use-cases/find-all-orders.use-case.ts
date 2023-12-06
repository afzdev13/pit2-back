import { Injectable } from '@nestjs/common';
import { Order } from '../../shared/entities/Order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllOrdersUseCase {
  constructor(
    @InjectRepository(Order)
    private OrderRepo: Repository<Order>,
  ) {}

  async execute(): Promise<Order[]> {
    return this.OrderRepo.find({
      relations: [
        'orderItems.item',
        'orderPaymentMethod.paymentMethod',
        'user',
      ],
    });
  }
}
