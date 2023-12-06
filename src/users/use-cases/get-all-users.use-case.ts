import { Injectable } from '@nestjs/common';
import { User } from '../../shared/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllUsersUseCase {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async execute(): Promise<User[]> {
    return this.userRepo.find({ relations: ['userRole', 'userRole.Role'] });
  }
}
