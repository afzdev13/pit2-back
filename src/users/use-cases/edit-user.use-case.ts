import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from 'src/shared/entities/user.entity';

@Injectable()
export class EditUserUseCase {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async execute(
    id,
    { email, name, password, address }: UpdateUserDto,
  ): Promise<void> {
    const user = await this.userRepo.findOneOrFail({ where: { id } });
    user.email = email || user.email;
    user.name = name || user.name;
    user.password = password || user.password;
    user.address = address || user.address;
    await this.userRepo.save(user);
  }
}
