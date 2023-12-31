import { Field, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";
import { IsEmail, IsEnum } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entity";
import { BeforeInsert, Column, Entity } from "typeorm";
import * as bycrypt from 'bcrypt';
import { InternalServerErrorException } from "@nestjs/common";
import { TransformationType } from "class-transformer";

enum UserRole {
    Hotel,
    Business
}

registerEnumType(UserRole, {name:"UserRole"});
 

@InputType({isAbstract:true})
@ObjectType()
@Entity()
export class User extends CoreEntity {
    @Column()
    @Field(type=>String)
    @IsEmail()
    email: string;

    @Column()
    @Field(type=>String)
    password: string;

    @Column({type:'enum', enum: UserRole})
    @Field(type=>UserRole)
    @IsEnum(UserRole)
    role: UserRole;

    @BeforeInsert()
    async hashPassword(): Promise<void>{
        try {
            this.password = await bycrypt.hash(this.password, 10);
        } catch(e){
            console.log(e);
            throw new InternalServerErrorException();
        }
    }

    async checkPassword(aPassword: string): Promise<boolean>{
        try{
            const ok = await bycrypt.compare(aPassword, this.password);
            return ok;
        } catch(e) {
            console.log(e);
            throw new InternalServerErrorException();
        }
    }
}