import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { EditUserUseCase } from './use-cases/edit-user.use-case';
import { GetAllUsersUseCase } from './use-cases/get-all-users.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../shared/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    DeleteUserUseCase,
    EditUserUseCase,
    GetAllUsersUseCase,
  ],
})
export class UsersModule {}
