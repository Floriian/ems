import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getEventThunks } from './event.thunk';
export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEventThunks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEventThunks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getEventThunks.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
