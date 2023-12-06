import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from 'src/shared/entities/orderItem';
import { Repository } from 'typeorm';
import { CreateOrderItemDTO } from './dto/create-order.dto';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private OrderItemRepo: Repository<OrderItem>,
  ) {}

  async execute(data: CreateOrderItemDTO): Promise<void> {
    const orderItem = new OrderItem(data);
    await this.OrderItemRepo.save(orderItem);
  }
}
