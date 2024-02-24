import { BaseEntity } from '../../utils/base.entity';
import { Column, Entity, Repository } from 'typeorm';

@Entity()
export class Event extends BaseEntity {
  @Column()
  name: string;
  @Column()
  views: number;
}

export type EventRepository = Repository<Event>;
