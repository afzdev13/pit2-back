import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderController {
    private readonly createOrderUseCase;
    private readonly getAllOrdersUseCase;
    private readonly getUserOrdersUseCase;
    create(createOrderDto: CreateOrderDto): Promise<string>;
    findAll(): Promise<import("../shared/entities/order.entity").Order[]>;
    findOne(id: string): Promise<import("../shared/entities/order.entity").Order[]>;
}
