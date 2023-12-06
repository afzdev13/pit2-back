import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDTO } from './dto/create-order.dto';
export declare class OrderItemsController {
    private readonly orderItemsService;
    constructor(orderItemsService: OrderItemsService);
    create(data: CreateOrderItemDTO): Promise<void>;
}
