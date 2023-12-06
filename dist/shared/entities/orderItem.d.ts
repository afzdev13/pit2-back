import { Order } from './order.entity';
import { Item } from './item.entity';
export declare class OrderItem {
    id: string;
    orderId: string;
    itemId: string;
    order: Order;
    item: Item;
    constructor(props: {
        orderId: string;
        itemId: string;
    }, id?: string);
}
