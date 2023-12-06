import { Role } from 'src/shared/entities/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private RoleRepo;
    constructor(RoleRepo: Repository<Role>);
    execute(): Promise<Role[]>;
}
