import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../utils/base.entity';
import { Column, Entity, Repository } from 'typeorm';

@Entity()
export class Event extends BaseEntity {
  @ApiProperty()
  @Column()
  name: string;
}

export type EventRepository = Repository<Event>;
