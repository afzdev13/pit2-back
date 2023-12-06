import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly getAllUsersUseCase;
    private readonly createUserUseCase;
    private readonly deleteUserUseCase;
    private readonly editUserUseCase;
    create(createUserDto: CreateUserDto): Promise<string>;
    findAll(): Promise<import("../shared/entities/user.entity").User[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
}
