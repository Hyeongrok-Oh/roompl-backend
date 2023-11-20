import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Hotel } from "./entities/hotel.entity";
import { Repository } from "typeorm";
import { UpdateHotelDto } from "./dtos/update-hotel.dto";
import { CreateHotelDto } from "./dtos/create-hotel.dto";

@Injectable()
export class HotelService {
    constructor(
        @InjectRepository(Hotel)
        private readonly hotels: Repository<Hotel>,
    ){}
    getAll(): Promise<Hotel[]>{
        return this.hotels.find();
    }
    createHotel(createHotelDto: CreateHotelDto): Promise<Hotel>{
        const newHotel = this.hotels.create(createHotelDto);
        return this.hotels.save(newHotel);

    }
    updateHotel({id, data}: UpdateHotelDto){
        return this.hotels.update(id, {...data});
    }
}