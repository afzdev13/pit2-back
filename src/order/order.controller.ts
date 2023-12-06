import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateOrderUseCase } from './use-cases/create-order.use-case';
import { GetAllOrdersUseCase } from './use-cases/find-all-orders.use-case';
import { GetUserOrdersUseCase } from './use-cases/find-user-orders.use-case';

@Controller('order')
export class OrderController {
  @Inject(CreateOrderUseCase)
  private readonly createOrderUseCase: CreateOrderUseCase;
  @Inject(GetAllOrdersUseCase)
  private readonly getAllOrdersUseCase: GetAllOrdersUseCase;
  @Inject(GetUserOrdersUseCase)
  private readonly getUserOrdersUseCase: GetUserOrdersUseCase;

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.createOrderUseCase.execute(createOrderDto);
  }

  @Get()
  findAll() {
    return this.getAllOrdersUseCase.execute();
  }

  @Get('/user/:id')
  findOne(@Param('id') id: string) {
    return this.getUserOrdersUseCase.execute(id);
  }
}
