import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event, EventRepository } from './entities/event.entity';
import { EventNotFoundException } from './exceptions/event-not-found.exception';
@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private readonly eventRepository: EventRepository
  ) {}
  create(createEventDto: CreateEventDto) {
    return 'This action adds a new event';
  }

  async findAll() {
    return await this.eventRepository.find();
  }

  async findOne(id: number) {
    const event = await this.eventRepository.findOneBy({ id });
    if (!event) throw new EventNotFoundException();
    return event;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
