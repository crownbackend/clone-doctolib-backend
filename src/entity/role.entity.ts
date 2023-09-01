import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity()
export class Role extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
