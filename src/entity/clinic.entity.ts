import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Image } from './image.entity';
import { Price } from './price.entity';

@Entity()
export class Clinic extends BaseEntity {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  phoneNumber: string;

  @Column({ type: 'text' })
  information: string;

  @Column({ type: 'text' })
  presentation: string;

  @Column({ type: 'text' })
  meansOfPayment: string;

  @Column({ type: 'text' })
  ratesAndReimbursement: string;

  @OneToMany(() => Price, (price) => price.clinic)
  prices: number;

  @OneToMany(() => Image, (image) => image.clinic)
  images: Image[];
}
