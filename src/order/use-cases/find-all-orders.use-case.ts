import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/shared/entities/order.entity';
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
