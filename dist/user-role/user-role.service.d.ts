import { UserRole } from 'src/shared/entities/userRole.entity';
import { Repository } from 'typeorm';
import { CreateUserRoleDTO } from './dto/create-user-role.dto';
export declare class UserRoleService {
    private userRoleRepo;
    constructor(userRoleRepo: Repository<UserRole>);
    execute(data: CreateUserRoleDTO): Promise<void>;
}
