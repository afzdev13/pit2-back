import { Item } from '../../shared/entities/Item.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from '../dto/create-Item.dto';
export declare class CreateItemUseCase {
    private ItemRepo;
    constructor(ItemRepo: Repository<Item>);
    execute(data: CreateItemDto): Promise<string>;
}
