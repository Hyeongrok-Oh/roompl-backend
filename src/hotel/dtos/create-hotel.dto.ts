import { ArgsType, Field, InputType, OmitType } from "@nestjs/graphql";
import { Hotel } from "../entities/hotel.entity";

@InputType()
export class CreateHotelDto extends OmitType(
    Hotel,
    ["id"],
    InputType,
){}