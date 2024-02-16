import { BaseEntity } from '../../utils/base.entity';
import { Column, Entity, Repository } from 'typeorm';

@Entity()
export class Event extends BaseEntity {
  @Column()
  name: string;
}

export type EventRepository = Repository<Event>;
