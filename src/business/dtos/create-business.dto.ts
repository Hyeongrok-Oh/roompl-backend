import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";

@ArgsType()
export class CreateBusinessDto {
    @Field(type => String)
    @IsString()
    @Length(5,12)
    name: string;
}