import { OrderItem } from 'src/shared/entities/orderItem';
import { Repository } from 'typeorm';
import { CreateOrderItemDTO } from './dto/create-order.dto';
export declare class OrderItemsService {
    private OrderItemRepo;
    constructor(OrderItemRepo: Repository<OrderItem>);
    execute(data: CreateOrderItemDTO): Promise<void>;
}
