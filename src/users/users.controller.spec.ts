import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { EditUserUseCase } from './use-cases/edit-user.use-case';
import { GetAllUsersUseCase } from './use-cases/get-all-users.use-case';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        CreateUserUseCase,
        DeleteUserUseCase,
        EditUserUseCase,
        GetAllUsersUseCase,
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
