import { OrderPaymentMethod } from 'src/shared/entities/orderPaymentMethod.entity';
import { Repository } from 'typeorm';
import { CreateOrderPaymentDTOMethod } from './dto/create-order-payment-method.dto';
export declare class OrderPaymentMethodsService {
    private OrderPaymentMethodRepo;
    constructor(OrderPaymentMethodRepo: Repository<OrderPaymentMethod>);
    execute(data: CreateOrderPaymentDTOMethod): Promise<void>;
}
