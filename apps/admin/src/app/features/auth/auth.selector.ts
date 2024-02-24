import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

function rootSelector(state: RootState) {
  return state.auth;
}

export const getAuth = createSelector(rootSelector, (authState) => {
  return {
    isLoggedIn: authState.isLoggedIn,
  };
});
