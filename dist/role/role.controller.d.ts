import { RoleService } from './role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    findAll(): Promise<import("../shared/entities/role.entity").Role[]>;
}
