import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { /*logOut, */ setCredentials } from '../../features/auth/authSlice';

const baseUrl = 'http://localhost:3300';

// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-retries
const staggeredBaseQuery = retry(
  fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState, extra, endpoint, type, forced }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  { maxRetries: 0 }
);

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await staggeredBaseQuery(args, api, extraOptions);

  // If you want, handle other status codes, too
  if (result.error && result.error.status === 403) {
    // try to get a new token
    const refreshResult = await staggeredBaseQuery(
      '/auth/refresh',
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data }));

      // retry the initial query
      // console.log('sending refresh token');
      result = await staggeredBaseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data.message = 'Your login has expired. ';
        // api.dispatch(logOut());
        // api.dispatch(apiSlice.util.resetApiState());
      }
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Note', 'User'],
  endpoints: (builder) => ({}),
});
