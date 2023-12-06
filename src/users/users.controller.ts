import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetAllUsersUseCase } from './use-cases/get-all-users.use-case';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { EditUserUseCase } from './use-cases/edit-user.use-case';

@Controller('users')
export class UsersController {
  @Inject(GetAllUsersUseCase)
  private readonly getAllUsersUseCase: GetAllUsersUseCase;
  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;
  @Inject(DeleteUserUseCase)
  private readonly deleteUserUseCase: DeleteUserUseCase;
  @Inject(EditUserUseCase)
  private readonly editUserUseCase: EditUserUseCase;

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  findAll() {
    return this.getAllUsersUseCase.execute();
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.editUserUseCase.execute(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUserUseCase.execute(id);
  }
}
