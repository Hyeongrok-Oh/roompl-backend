import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/users.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-account.dto";
import { LoginInput, LoginOutput } from "./dtos/login.dto";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>
    ) {}

    async createAccount({email, password, role}: CreateAccountInput): Promise<CreateAccountOutput>{
        try{
            const exist = await this.users.findOne({where: {email}})
            if(exist){
                return {
                    ok: false,
                    error: "There is a user with that email already"
                }
            }
            await this.users.save(this.users.create({email, password, role}));
            return {ok: true}
        } catch(e) {
            console.log(e)
            return {ok: false, error: "Coudln't create account"}
        }
    }

    async login({email, password}: LoginInput): Promise<LoginOutput>{
        try{
            const user = await this.users.findOne({where: {email}})
            if(!user){
                return {ok: false, error: "User not found"}
            }
            const passwordCorrect = await user.checkPassword(password);
            if(!passwordCorrect){
                return {ok: false, error: "Password invalid"}
            }
            return {ok: true, token: 'lalallala'}
        } catch(error) {
            return {ok: false, error}
        }
    }
}