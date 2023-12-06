import { User } from '../../shared/entities/user.entity';
import { Repository } from 'typeorm';
export declare class DeleteUserUseCase {
    private userRepo;
    constructor(userRepo: Repository<User>);
    execute(id: string): Promise<void>;
}
