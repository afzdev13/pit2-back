import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  OneToOne,
} from 'typeorm';
import { Order } from './order.entity';
import { PaymentMethod } from './paymentMethod.entity';
import crypto from 'crypto';

@Entity()
export class OrderPaymentMethod {
  @PrimaryColumn()
  id: string;

  @Column()
  orderId: string;

  @Column()
  paymentMethodId: string;

  @OneToOne(() => Order, ({ orderPaymentMethod }) => orderPaymentMethod)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'paymentMethodId' })
  paymentMethod: PaymentMethod;

  constructor(
    props: {
      orderId: string;
      paymentMethodId: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
