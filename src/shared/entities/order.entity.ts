import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { OrderItem } from './orderItem';
import { OrderPaymentMethod } from './orderPaymentMethod.entity';
import { User } from './user.entity';
import crypto from 'crypto';

@Entity()
export class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, ({ orders }) => orders)
  user: User;

  @OneToMany(() => OrderItem, ({ order }) => order)
  orderItems: OrderItem[];

  @OneToOne(() => OrderPaymentMethod, ({ order }) => order)
  orderPaymentMethod: OrderPaymentMethod;

  constructor(
    props: {
      userId: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
