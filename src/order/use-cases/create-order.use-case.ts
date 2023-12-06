import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from 'src/order/dto/create-Order.dto';
import { Order } from 'src/shared/entities/order.entity';

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
