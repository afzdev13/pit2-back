import { User } from '../../shared/entities/user.entity';
import { Repository } from 'typeorm';
export declare class GetAllUsersUseCase {
    private userRepo;
    constructor(userRepo: Repository<User>);
    execute(): Promise<User[]>;
}
