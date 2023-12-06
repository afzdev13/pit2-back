import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemsController {
    private readonly createItemUseCase;
    private readonly getAllItemsUseCase;
    private readonly editItemUseCase;
    create(createItemDto: CreateItemDto): Promise<string>;
    findAll(): Promise<import("../shared/entities/item.entity").Item[]>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<void>;
}
