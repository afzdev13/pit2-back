import { Item } from '../../shared/entities/Item.entity';
import { Repository } from 'typeorm';
import { UpdateItemDto } from '../dto/update-Item.dto';
export declare class EditItemUseCase {
    private ItemRepo;
    constructor(ItemRepo: Repository<Item>);
    execute(id: any, { description, name, value }: UpdateItemDto): Promise<void>;
}
