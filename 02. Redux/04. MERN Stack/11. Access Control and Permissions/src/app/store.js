import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from '../features/auth/authSlice';

// console.log(process.env.NODE_ENV);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

// A utility used to enable refetchOnMount and refetchOnReconnect behaviors.
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// https://redux-toolkit.js.org/rtk-query/api/setupListeners
// enable listener behavior for the store
setupListeners(store.dispatch);
