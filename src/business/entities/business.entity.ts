import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Business {
    @Field(type => Number)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(type => String)
    @Column()
    company: string;

    @Field(type => String)
    @Column()
    location: string;

    @Field(type => String)
    @Column()
    username: string;
}