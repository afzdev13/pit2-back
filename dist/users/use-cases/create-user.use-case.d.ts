import { User } from '../../shared/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
export declare class CreateUserUseCase {
    private userRepo;
    constructor(userRepo: Repository<User>);
    execute(data: CreateUserDto): Promise<string>;
}
