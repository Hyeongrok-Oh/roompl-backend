import { ArgsType, Field, InputType, OmitType, PartialType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";
import { Hotel } from "../entities/hotel.entity";
import { CreateHotelDto } from "./create-hotel.dto";

@InputType()
export class UpdateHotelInputType extends PartialType(CreateHotelDto){}

@InputType()
export class UpdateHotelDto{
    @Field(type => Number)
    id: number;

    @Field(type => UpdateHotelInputType)
    data: UpdateHotelInputType;
}