import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/shared/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private RoleRepo: Repository<Role>,
  ) {}

  async execute(): Promise<Role[]> {
    return this.RoleRepo.find();
  }
}
