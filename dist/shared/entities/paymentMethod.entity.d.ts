import { OrderPaymentMethod } from './orderPaymentMethod.entity';
export declare class PaymentMethod {
    id: string;
    name: string;
    OrderPaymentMethod: OrderPaymentMethod[];
    constructor(props: {
        name: string;
    }, id?: string);
}
