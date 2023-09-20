import {Entity, Column, ManyToMany, JoinTable, OneToMany} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from './role.entity';
import {Clinic} from "./clinic.entity";
@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'timestamptz' })
  dateOfBirth: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Clinic, (clinic) => clinic.users)
  clinic: Clinic[];
}
