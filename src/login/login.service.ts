import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async login({ email, password }: LoginDto): Promise<User> {
    return this.userRepo.findOne({
      where: { email, password },
      relations: ['orders', 'userRole.Role'],
    });
  }
}
