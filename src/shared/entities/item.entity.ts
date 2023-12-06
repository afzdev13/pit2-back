import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from './orderItem';
import crypto from 'crypto';

@Entity()
export class Item {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;

  @OneToMany(() => OrderItem, ({ item }) => item)
  orderItem: OrderItem[];

  constructor(
    props: {
      name: string;
      description: string;
      value: number;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
