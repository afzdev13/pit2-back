import { OrderPaymentMethodsService } from './order-payment-methods.service';
import { CreateOrderPaymentDTOMethod } from './dto/create-order-payment-method.dto';
export declare class OrderPaymentMethodsController {
    private readonly orderPaymentMethodsService;
    constructor(orderPaymentMethodsService: OrderPaymentMethodsService);
    create(data: CreateOrderPaymentDTOMethod): Promise<void>;
}
