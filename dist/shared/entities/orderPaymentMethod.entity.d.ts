import { Order } from './order.entity';
import { PaymentMethod } from './paymentMethod.entity';
export declare class OrderPaymentMethod {
    id: string;
    orderId: string;
    paymentMethodId: string;
    order: Order;
    paymentMethod: PaymentMethod;
    constructor(props: {
        orderId: string;
        paymentMethodId: string;
    }, id?: string);
}
