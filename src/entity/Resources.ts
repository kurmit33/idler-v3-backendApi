import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./Users";

Entity()
export class Resources {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    @OneToOne(type=> Users)
    @JoinColumn()
    users!: number;

    // Stone Age
    @Column({type: "int", default: 0})
    wood!: number;

    @Column({type: "int", default: 0})
    stone!: number;

    @Column({type: "int", default: 0})
    food!: number;

    // Neolithic Age
    @Column({type: "int", default: 0})
    energy!: number;

    @Column({type: "int", default: 0})
    people!: number;

    @Column({type: "int", default: 0})
    copper!: number;

    @Column({type: "int", default: 0})
    zinc!: number;

    // Bronze Age
    @Column({type: "int", default: 0})
    workers!: number;

    @Column({type: "int", default: 0})
    money!: number;

    @Column({type: "int", default: 0})
    bronze!: number;

    // Iron Age
    @Column({type: "int", default: 0})
    iron!: number;

    @Column({type: "int", default: 0})
    silver!: number;

    @Column({type: "int", default: 0})
    gold!: number;

    // Middle Age
    @Column({type: "int", default: 0})
    engineers!: number;

    @Column({type: "int", default: 0})
    steel!: number;

    @Column({type: "int", default: 0})
    coal!: number;

    // Modern Age
    @Column({type: "int", default: 0})
    crudeOil!: number;

    @Column({type: "int", default: 0})
    aluminium!: number;

    @Column({type: "int", default: 0})
    electricity!: number;

    @Column({type: "int", default: 0})
    naturalGas!: number;

    // Atomic Age
    @Column({type: "int", default: 0})
    uranium!: number;

    @Column({type: "int", default: 0})
    plutonium!: number;

    @Column({type: "int", default: 0})
    nuclearWaste!: number;
}
