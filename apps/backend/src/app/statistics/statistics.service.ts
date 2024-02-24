import { Injectable } from '@nestjs/common';

@Injectable()
export class StatisticsService {
  constructor() {}

  getStatistics() {
    return {
      message: 'Hello World!',
    };
  }
}
