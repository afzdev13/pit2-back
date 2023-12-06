import { OrderItem } from './orderItem';
export declare class Item {
    id: string;
    name: string;
    description: string;
    value: number;
    orderItem: OrderItem[];
    constructor(props: {
        name: string;
        description: string;
        value: number;
    }, id?: string);
}
