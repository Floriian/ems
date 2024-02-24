import { axiosInstance } from '../instance';
import type { Event } from '@ems/types';
export const events = {
  getOneEvent: async (id: number) => {
    const { data } = await axiosInstance.get<Event>(`/events/${id}`);
    return data;
  },
  getAllEvents: async () => {
    const { data } = await axiosInstance.get<Event[]>(`/events`);
    return data;
  },
};
