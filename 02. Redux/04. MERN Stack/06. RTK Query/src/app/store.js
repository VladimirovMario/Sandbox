import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';

// console.log(process.env.NODE_ENV);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === 'development',
});
