import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { Module } from '@nestjs/common';
@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
