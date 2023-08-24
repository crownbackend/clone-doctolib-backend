import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "./base.entity";

@Entity()
export class Clinic extends BaseEntity {

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    city: string;
}