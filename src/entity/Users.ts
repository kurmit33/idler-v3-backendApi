import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    UpdateDateColumn,
    CreateDateColumn,
    Unique,
    ManyToMany, JoinColumn, ManyToOne
} from "typeorm";
import {Ages} from "./Ages";

@Entity()
export class Users {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    @Column({type: "varchar", length: 64})
    @Unique(["nick"])
    nick!: string;

    @Column({type: "varchar", length: 64})
    @Unique(["email"])
    email!: string;

    @Column({type: "varchar", length: 64})
    password!: string;

    @Column({type: "varchar", length: 64})
    loggedKey!: string;

    @Column({type: "datetime"})
    @CreateDateColumn()
    createdAt!: Date;

    @Column({type: "datetime"})
    @UpdateDateColumn()
    lastLogin!: Date;

    @Column({type:"datetime"})
    loginExpired!: Date;

    @ManyToOne(type => Ages, ages => ages.users)
    ages!: Ages;

    @Column({type: "int", default: 5})
    status!: number;
}
