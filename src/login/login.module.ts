import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { User } from 'src/shared/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/shared/entities/role.entity';
import { UserRole } from 'src/shared/entities/userRole.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, UserRole])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
