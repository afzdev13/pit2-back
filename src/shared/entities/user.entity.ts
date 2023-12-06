import { Entity, Column, OneToOne, OneToMany, PrimaryColumn } from 'typeorm';
import crypto from 'crypto';
import { UserRole } from './userRole.entity';
import { Order } from './order.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @OneToOne(() => UserRole, ({ User }) => User)
  userRole: UserRole;

  @OneToMany(() => Order, ({ user }) => user)
  orders: Order[];

  constructor(
    props: {
      name: string;
      email: string;
      password: string;
      address: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
