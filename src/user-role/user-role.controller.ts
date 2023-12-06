import { Body, Controller, Post } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { CreateUserRoleDTO } from './dto/create-user-role.dto';

@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  create(@Body() data: CreateUserRoleDTO) {
    return this.userRoleService.execute(data);
  }
}
