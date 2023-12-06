import { UserRole } from './userRole.entity';
import { Order } from './order.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    address: string;
    userRole: UserRole;
    orders: Order[];
    constructor(props: {
        name: string;
        email: string;
        password: string;
        address: string;
    }, id?: string);
}
