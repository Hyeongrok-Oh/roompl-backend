import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/users.entity";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-account.dto";
import { LoginInput, LoginOutput } from "./dtos/login.dto";



@Resolver(of => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService){}

    @Query(returns => Boolean)
    getAll(){
        return true;
    }

    @Mutation(returns => CreateAccountOutput)
    async createAccount(@Args("input") createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>{
        try{
            return this.usersService.createAccount(createAccountInput);
        } catch(error) {
            return {ok: false, error}
        }
    }

    @Mutation(returns => LoginOutput)
    async login(@Args("input") loginInput: LoginInput): Promise<LoginOutput>{
        try{
            return this.usersService.login(loginInput);
        } catch(error) {
            return {ok: false, error}
        }
    }
}