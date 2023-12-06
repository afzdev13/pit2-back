import { UserRoleService } from './user-role.service';
import { CreateUserRoleDTO } from './dto/create-user-role.dto';
export declare class UserRoleController {
    private readonly userRoleService;
    constructor(userRoleService: UserRoleService);
    create(data: CreateUserRoleDTO): Promise<void>;
}
