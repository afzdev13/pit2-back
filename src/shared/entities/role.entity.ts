import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import crypto from 'crypto';
import { UserRole } from './userRole.entity';

@Entity()
export class Role {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => UserRole, ({ Role }) => Role)
  userRole: UserRole;

  constructor(
    props: {
      name: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
