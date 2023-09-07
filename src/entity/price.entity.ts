import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Clinic } from './clinic.entity';

@Entity()
export class Price extends BaseEntity {
    @Column()
    name: string;

    @Column({ type: 'float' })
    price: number;

    @ManyToOne(() => Clinic, (clinic) => clinic.prices)
    clinic: Clinic;
}