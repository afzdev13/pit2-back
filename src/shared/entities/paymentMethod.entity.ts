import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { OrderPaymentMethod } from './orderPaymentMethod.entity';
import crypto from 'crypto';

@Entity()
export class PaymentMethod {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => OrderPaymentMethod, ({ paymentMethod }) => paymentMethod)
  OrderPaymentMethod: OrderPaymentMethod[];

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
