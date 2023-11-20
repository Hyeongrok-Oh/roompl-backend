import { ArgsType, Field, InputType, OmitType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";
import { Business } from "../entities/business.entity";

@InputType()
export class CreateBusinessDto extends OmitType(
    Business,
    ["id"],
    InputType,
){}