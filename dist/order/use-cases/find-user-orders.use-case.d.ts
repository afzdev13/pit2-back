import { Order } from '../../shared/entities/Order.entity';
import { Repository } from 'typeorm';
export declare class GetUserOrdersUseCase {
    private OrderRepo;
    constructor(OrderRepo: Repository<Order>);
    execute(userId: string): Promise<Order[]>;
}
