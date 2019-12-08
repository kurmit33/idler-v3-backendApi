import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Ages} from "./Ages";

@Entity()
export class ResourcesTypes {
    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    @Column({type: "varchar"})
    name!: string;

    @ManyToOne(type => Ages, age => age.resources)
    ages!: Ages;
}
