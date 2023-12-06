import { Order } from '../../shared/entities/Order.entity';
import { Repository } from 'typeorm';
export declare class GetAllOrdersUseCase {
    private OrderRepo;
    constructor(OrderRepo: Repository<Order>);
    execute(): Promise<Order[]>;
}
