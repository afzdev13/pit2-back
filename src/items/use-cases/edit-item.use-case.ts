import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from 'src/shared/entities/item.entity';
import { UpdateItemDto } from '../dto/update-item.dto';

@Injectable()
export class EditItemUseCase {
  constructor(
    @InjectRepository(Item)
    private ItemRepo: Repository<Item>,
  ) {}

  async execute(
    id,
    { description, name, value }: UpdateItemDto,
  ): Promise<void> {
    const Item = await this.ItemRepo.findOneOrFail({ where: { id } });
    Item.description = description || Item.description;
    Item.name = name || Item.name;
    Item.value = value || Item.value;
    await this.ItemRepo.save(Item);
  }
}
