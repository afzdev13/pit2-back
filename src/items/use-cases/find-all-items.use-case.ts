import { Injectable } from '@nestjs/common';
import { Item } from '../../shared/entities/Item.entity';
import { InjectRepository } from '@nestjs/typeorm';
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
