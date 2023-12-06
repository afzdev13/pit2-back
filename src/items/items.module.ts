import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { CreateItemUseCase } from './use-cases/create-item.use-case';
import { GetAllItemsUseCase } from './use-cases/find-all-items.use-case';
import { EditItemUseCase } from './use-cases/edit-item.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/shared/entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemsController],
  providers: [CreateItemUseCase, GetAllItemsUseCase, EditItemUseCase],
})
export class ItemsModule {}
