import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Business } from "./entities/business.entity";
import { CreateBusinessDto } from "./dtos/create-business.dto";
import { BusinessService } from "./business.service";
import { UpdateBusinessDto } from "./dtos/update-business.dto";

@Resolver(of => Business)
export class BusinessResolver {
    constructor(private readonly businessService: BusinessService){}
    @Query(returns => [Business])
    businesses(): Promise<Business[]>{
        return this.businessService.getAll();
    }

    @Mutation(returns => Boolean)
    async createBusiness(@Args('input') createBusinessDto: CreateBusinessDto): Promise <boolean> {
        try{
            await this.businessService.createBusiness(createBusinessDto);
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async updateBusiness(@Args('input') updateBusinessDto: UpdateBusinessDto): Promise <boolean> {
        try{
            await this.businessService.updateBusiness(updateBusinessDto);
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}