import { UserRole } from './userRole.entity';
export declare class Role {
    id: string;
    name: string;
    userRole: UserRole;
    constructor(props: {
        name: string;
    }, id?: string);
}
