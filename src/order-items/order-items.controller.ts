import { Body, Controller, Post } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDTO } from './dto/create-order.dto';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  create(@Body() data: CreateOrderItemDTO) {
    return this.orderItemsService.execute(data);
  }
}
