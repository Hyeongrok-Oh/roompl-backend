import { Module } from '@nestjs/common';
import { BusinessResolver } from './business.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './entities/business.entity';
import { BusinessService } from './business.service';

@Module({
    imports: [TypeOrmModule.forFeature([Business])],
    providers: [BusinessResolver, BusinessService],
})
export class BusinessModule {}
