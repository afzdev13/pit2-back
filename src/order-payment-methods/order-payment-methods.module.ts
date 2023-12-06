import { Module } from '@nestjs/common';
import { OrderPaymentMethodsService } from './order-payment-methods.service';
import { OrderPaymentMethodsController } from './order-payment-methods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderPaymentMethod } from 'src/shared/entities/orderPaymentMethod.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderPaymentMethod])],
  controllers: [OrderPaymentMethodsController],
  providers: [OrderPaymentMethodsService],
})
export class OrderPaymentMethodsModule {}
