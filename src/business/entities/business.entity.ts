import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Business {
    @Field(type => String)
    name: string;
}