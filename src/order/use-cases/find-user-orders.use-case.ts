import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/shared/entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetUserOrdersUseCase {
  constructor(
    @InjectRepository(Order)
    private OrderRepo: Repository<Order>,
  ) {}

  async execute(userId: string): Promise<Order[]> {
    return this.OrderRepo.find({
      where: { userId },
      relations: ['orderItems', 'paymentMethod'],
    });
  }
}
