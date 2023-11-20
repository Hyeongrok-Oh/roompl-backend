import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Business } from "./entities/business.entity";
import { Repository } from "typeorm";
import { CreateBusinessDto } from "./dtos/create-business.dto";
import { UpdateBusinessDto } from "./dtos/update-business.dto";

@Injectable()
export class BusinessService {
    constructor(
        @InjectRepository(Business)
        private readonly businesses: Repository<Business>,
    ){}
    getAll(): Promise<Business[]>{
        return this.businesses.find();
    }
    createBusiness(createBusinessDto: CreateBusinessDto): Promise<Business>{
        const newBusiness = this.businesses.create(createBusinessDto);
        return this.businesses.save(newBusiness);

    }
    updateBusiness({id, data}: UpdateBusinessDto){
        return this.businesses.update(id, {...data});
    }
}