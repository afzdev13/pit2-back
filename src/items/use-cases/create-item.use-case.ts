import { Injectable } from '@nestjs/common';
import { Item } from '../../shared/entities/Item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from '../dto/create-Item.dto';

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
