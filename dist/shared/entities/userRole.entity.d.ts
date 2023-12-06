import { User } from './user.entity';
import { Role } from './role.entity';
export declare class UserRole {
    id: string;
    userId: string;
    roleId: string;
    User: User;
    Role: Role;
    constructor(props: {
        userId: string;
        roleId: string;
    }, id?: string);
}
