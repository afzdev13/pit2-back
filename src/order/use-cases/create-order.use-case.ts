import { Injectable } from '@nestjs/common';
import { Order } from '../../shared/entities/Order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../dto/create-Order.dto';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @InjectRepository(Order)
    private OrderRepo: Repository<Order>,
  ) {}

  async execute(data: CreateOrderDto): Promise<string> {
    const order = new Order(data);
    await this.OrderRepo.save(order);
    return order.id;
  }
}
