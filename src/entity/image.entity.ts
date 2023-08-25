import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Clinic } from './clinic.entity';
@Entity()
export class Image extends BaseEntity {
  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToOne(() => Clinic, (clinic) => clinic.images)
  clinic: Clinic;
}
