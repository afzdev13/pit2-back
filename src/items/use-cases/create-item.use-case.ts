import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from 'src/shared/entities/item.entity';
import { CreateItemDto } from 'src/items/dto/create-item.dto';

@Injectable()
export class CreateItemUseCase {
  constructor(
    @InjectRepository(Item)
    private ItemRepo: Repository<Item>,
  ) {}

  async execute(data: CreateItemDto): Promise<string> {
    const item = new Item(data);
    await this.ItemRepo.save(item);
    return item.id;
  }
}
