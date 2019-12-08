import {Column, Entity,  OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./Users";
import {BuildingsModels} from "./buildingsModels";
import {ResourcesTypes} from "./ResourcesTypes";

@Entity()
export class Ages {
    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    @Column({type: "varchar"})
    name!: string;

    @Column({type: "int"})
    minInt!: number;

    @Column({type: "int"})
    maxAge!: number;

    @OneToMany(type => BuildingsModels, building => building.ages)
    buildings!: BuildingsModels[];

    @OneToMany( type=> ResourcesTypes, resources => resources.ages)
    resources!: ResourcesTypes[];

    @OneToMany(type=> Users, users => users.ages)
    users!: Users[];
}
