import { OrderItem } from './orderItem';
import { OrderPaymentMethod } from './orderPaymentMethod.entity';
import { User } from './user.entity';
export declare class Order {
    id: string;
    userId: string;
    user: User;
    orderItems: OrderItem[];
    orderPaymentMethod: OrderPaymentMethod;
    constructor(props: {
        userId: string;
    }, id?: string);
}
