import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/shared/entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllItemsUseCase {
  constructor(
    @InjectRepository(Item)
    private ItemRepo: Repository<Item>,
  ) {}

  async execute(): Promise<Item[]> {
    return this.ItemRepo.find();
  }
}
