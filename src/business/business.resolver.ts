import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class BusinessResolver {
    @Query(returns => Boolean)
    isReady(): Boolean{
        return true;
    }
}