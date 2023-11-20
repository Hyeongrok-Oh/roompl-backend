import { Module } from '@nestjs/common';
import { HotelResolver } from './hotel.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { HotelService } from './hotel.service';

@Module({
    imports: [TypeOrmModule.forFeature([Hotel])],
    providers: [HotelResolver, HotelService],
})
export class HotelModule {}
