import { Order } from '../../shared/entities/Order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../dto/create-Order.dto';
export declare class CreateOrderUseCase {
    private OrderRepo;
    constructor(OrderRepo: Repository<Order>);
    execute(data: CreateOrderDto): Promise<string>;
}
