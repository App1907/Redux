import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './slice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});
