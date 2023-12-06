import { Injectable } from '@nestjs/common';
import { User } from '../../shared/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.userRepo.findOneOrFail({ where: { id } });
    await this.userRepo.delete(user);
  }
}
