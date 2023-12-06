import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from 'src/shared/entities/userRole.entity';
import { Repository } from 'typeorm';
import { CreateUserRoleDTO } from './dto/create-user-role.dto';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private userRoleRepo: Repository<UserRole>,
  ) {}

  async execute(data: CreateUserRoleDTO): Promise<void> {
    const userRole = new UserRole(data);
    await this.userRoleRepo.save(userRole);
  }
}
