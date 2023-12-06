import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { CreateItemUseCase } from './use-cases/create-item.use-case';
import { GetAllItemsUseCase } from './use-cases/find-all-items.use-case';
import { EditItemUseCase } from './use-cases/edit-item.use-case';

@Controller('items')
export class ItemsController {
  @Inject(CreateItemUseCase)
  private readonly createItemUseCase: CreateItemUseCase;
  @Inject(GetAllItemsUseCase)
  private readonly getAllItemsUseCase: GetAllItemsUseCase;
  @Inject(EditItemUseCase)
  private readonly editItemUseCase: EditItemUseCase;

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.createItemUseCase.execute(createItemDto);
  }

  @Get()
  findAll() {
    return this.getAllItemsUseCase.execute();
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.editItemUseCase.execute(id, updateItemDto);
  }
}
