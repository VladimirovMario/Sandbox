// !!! Don't forget to import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';

const baseUrl = 'http://localhost:3030/api';

const baseQuery = fetchBaseQuery({
  baseUrl,
  withCredentials: true,
  prepareHeaders(headers, { getState, extra, endpoint, type, forced }) {
    const token = getState().auth?.token;
    if (token) {
      console.log('apiSlice token', token.slice(0, 9));
      headers.set('X-Authorization', `${token}`);
      // headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// Automatic re-authorization by extending fetchBaseQuery
// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // console.log('args', args);
  // console.log('api', api);
  // console.log('extraOptions', extraOptions);
  if (result?.error?.originalStatus === 403) {
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refreshToken', api, extraOptions);
    if (refreshResult?.data) {
      const username = api.getState().auth.username;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, username }));
      // retry the initial query with access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});

/*
// !!! Don't forget to import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3030/api';

const baseQuery = fetchBaseQuery({
  baseUrl,
  withCredentials: true,
  prepareHeaders(headers, { getState }) {
    const token = getState().auth?.token;
    if (token) {
      console.log('apiSlice token', token.slice(0, 9));
      headers.set('X-Authorization', `${token}`);
      // headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({}),
});
*/
