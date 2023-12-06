import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { CreateOrderUseCase } from './use-cases/create-order.use-case';
import { GetAllOrdersUseCase } from './use-cases/find-all-orders.use-case';
import { GetUserOrdersUseCase } from './use-cases/find-user-orders.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/shared/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [CreateOrderUseCase, GetAllOrdersUseCase, GetUserOrdersUseCase],
})
export class OrderModule {}
