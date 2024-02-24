import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthTypes } from './types';
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<AuthTypes>) => {
      state.isLoggedIn = payload.isLoggedIn;
    },
  },
});

export const { setAuth } = authSlice.actions;
