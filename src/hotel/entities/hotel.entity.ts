import { Field, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Hotel extends CoreEntity{
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

    @Field(type => Number)
    @Column()
    @IsNumber()
    max_capacity: number;
}