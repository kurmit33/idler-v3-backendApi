import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Ages} from "./Ages";

@Entity()
export class BuildingsModels{
    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    @ManyToOne(type => Ages, age => age.buildings)
    ages!: Ages;
}
