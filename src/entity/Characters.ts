import {
    Entity, Column,
    Unique, PrimaryColumn, ManyToOne, JoinColumn, OneToOne
} from "typeorm";
//import {CharacterRaces} from "./CharacterRaces";
//import {CharacterClass} from "./CharacterClass";
import {Users} from "./Users";


@Entity()
export class Characters{

    @PrimaryColumn({type: "int"})
    @Unique(["id"])
    id!: number;

    @Column({type: "varchar", length: 64})
    @Unique(["name"])
    name!: string;

    @Column({type:"int", default: 0})
    level!: number;

    @Column({type: "int", default: 0})
    experience!: number;

    @Column({type: "int", default: 5})
    statsPoints!: number;

    @Column({type: "int", default: 0})
    stamina!: number;

    @Column({type: "int", default: 0})
    strength!: number;

    @Column({type: "int", default: 0})
    dexterity!: number;

    @Column({type: "int", default: 0})
    intelligence!: number;

    @OneToOne(type => Users)
    @JoinColumn()
    user!: Users;

/*    @Column({type: "int", default: 0})
    leftHandItemId!: number;

    @Column({type: "int", default: 0})
    rightHandItemId!: number;

    @Column({type: "int", default: 0})
    headItemId!: number;

    @Column({type: "int", default: 0})
    torsoItemId!: number;

    @Column({type: "int", default: 0})
    handsItemId!: number;

    @Column({type: "int", default: 0})
    legsItemId!: number;

    @ManyToOne(type => CharacterRaces, race => race.character)
    characterRace!: CharacterRaces | undefined;

    @ManyToOne(type => CharacterRaces, race => race.character)
    characterClass!: CharacterClass | undefined;*/

    @Column({type: "int"})
    status!: number;
}
