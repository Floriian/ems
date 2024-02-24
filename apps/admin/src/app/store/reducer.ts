import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '../features';
export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});
