import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { AtGuard } from '../auth/guards/at.guard';

@Controller()
@UseGuards(AtGuard)
export class StatisticsController {
  constructor(private statisticsService: StatisticsService) {}
  @Get()
  getStatistics() {
    return this.statisticsService.getStatistics();
  }
}
