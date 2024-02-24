import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { AtGuard } from '../auth/guards/at.guard';
import { CheckAbility } from '../casl/abilities.decorator';
import { Actions } from '../casl/actions.enum';
import { Event } from '../events/entities/event.entity';

@Controller('events')
@UseGuards(AtGuard)
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @CheckAbility({ action: Actions.Create, subject: Event })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const event = this.eventsService.findOne(+id);
    if (event) this.eventsService.increaseView(+id);
    return event;
  }

  @Get('/admin/:id')
  findOneForAdmin(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
