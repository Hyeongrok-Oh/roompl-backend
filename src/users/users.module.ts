import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersResolver, UsersService],
})
export class UsersModule {}
