import { Item } from '../../shared/entities/Item.entity';
import { Repository } from 'typeorm';
export declare class GetAllItemsUseCase {
    private ItemRepo;
    constructor(ItemRepo: Repository<Item>);
    execute(): Promise<Item[]>;
}
