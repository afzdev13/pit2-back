import { Injectable } from '@nestjs/common';
import { Order } from '../../shared/entities/Order.entity';
import { InjectRepository } from '@nestjs/typeorm';
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
