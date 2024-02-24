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
  async create(createEventDto: CreateEventDto) {
    const event = this.eventRepository.create(createEventDto);
    await this.eventRepository.save(event);
    return event;
  }

  async findAll() {
    return await this.eventRepository.find();
  }

  async findOne(id: number) {
    const event = await this.eventRepository.findOneBy({ id });
    if (!event) throw new EventNotFoundException();
    return event;
  }

  async getMostViewedEvent(eventNumber?: number) {
    return await this.eventRepository.find({
      order: { views: 'ASC' },
      take: eventNumber || 5,
    });
  }

  async increaseView(id: number) {
    const event = await this.eventRepository.findOneBy({ id });
    return await this.eventRepository.update({ id }, { views: event.views++ });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
