import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import crypto from 'crypto';
import { User } from './user.entity';
import { Role } from './role.entity';

@Entity()
export class UserRole {
  @PrimaryColumn()
  id: string;

  @Column()
  userId: string;

  @Column()
  roleId: string;

  @OneToOne(() => User, ({ userRole }) => userRole)
  @JoinColumn({ name: 'userId' })
  User: User;

  @ManyToOne(() => Role, ({ userRole }) => userRole)
  @JoinColumn({ name: 'roleId' })
  Role: Role;

  constructor(
    props: {
      userId: string;
      roleId: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
