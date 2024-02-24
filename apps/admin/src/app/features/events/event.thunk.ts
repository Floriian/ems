import { api } from '@ems/services';
import { Event } from '@ems/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getEventThunks = createAsyncThunk<Event[], void>(
  'event/getEvents',
  async (_, thunkApi) => {
    try {
      return await api.events.getAllEvents();
    } catch (e) {
      const { rejectWithValue } = thunkApi;
      return rejectWithValue({ error: e });
    }
  }
);
