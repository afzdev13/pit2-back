import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
export declare class LoginService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    login({ email, password }: LoginDto): Promise<User>;
}
