import { User } from '../../shared/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class EditUserUseCase {
    private userRepo;
    constructor(userRepo: Repository<User>);
    execute(id: any, { email, name, password, address }: UpdateUserDto): Promise<void>;
}
