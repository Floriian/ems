import { Event } from './types';

export const initialState: Event = {
  data: [
    {
      name: '',
      views: 0,
    },
  ],
  error: null,
  isLoading: false,
};
