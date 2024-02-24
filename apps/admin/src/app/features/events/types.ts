import { InitialState } from '../../types';
import { Event as EventEntity } from '@ems/types';
export type Event = InitialState<EventEntity[]>;
