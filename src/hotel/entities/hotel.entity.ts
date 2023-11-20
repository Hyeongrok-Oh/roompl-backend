import { Field, ObjectType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Hotel {
    @Field(type => Number)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(type => String)
    @Column()
    @IsString()
    hotel: string;

    @Field(type => String, {nullable: true})
    @Column()
    @IsString()
    location: string;

    @Field(type => String)
    @Column()
    @IsString()
    manager: string;
}