import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Business } from "./entities/business.entity";
import { CreateBusinessDto } from "./dtos/create-business.dto";

@Resolver(of => Business)
export class BusinessResolver {
    @Query(returns => [Business])
    businesses(): Business[]{
        return[];
    }

    @Mutation(returns => Boolean)
    createBusiness(
        @Args() createBusinessDto: CreateBusinessDto): boolean {
        return true;
    }
}