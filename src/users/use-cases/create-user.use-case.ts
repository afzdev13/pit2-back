import { Injectable } from '@nestjs/common';
import { User } from '../../shared/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async execute(data: CreateUserDto): Promise<string> {
    const user = new User(data);
    await this.userRepo.save(user);
    return user.id;
  }
}
