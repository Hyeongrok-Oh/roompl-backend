import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Hotel } from "./entities/hotel.entity";
import { HotelService } from "./hotel.service";
import { UpdateHotelDto } from "./dtos/update-hotel.dto";
import { CreateHotelDto } from "./dtos/create-hotel.dto";

@Resolver(of => Hotel)
export class HotelResolver {
    constructor(private readonly hotelService: HotelService){}
    @Query(returns => [Hotel])
    hotels(): Promise<Hotel[]>{
        return this.hotelService.getAll();
    }

    @Mutation(returns => Boolean)
    async createHotel(@Args('input') createHotelDto: CreateHotelDto): Promise <boolean> {
        try{
            await this.hotelService.createHotel(createHotelDto);
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async updateHotel(@Args('input') updateHotelDto: UpdateHotelDto): Promise <boolean> {
        try{
            await this.hotelService.updateHotel(updateHotelDto);
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}