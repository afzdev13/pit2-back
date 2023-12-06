import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';
import { Item } from './item.entity';
import crypto from 'crypto';

@Entity()
export class OrderItem {
  @PrimaryColumn()
  id: string;

  @Column()
  orderId: string;

  @Column()
  itemId: string;

  @ManyToOne(() => Order, ({ orderItems }) => orderItems)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @ManyToOne(() => Item)
  @JoinColumn({ name: 'itemId' })
  item: Item;

  constructor(
    props: {
      orderId: string;
      itemId: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
