import { apiSlice } from '../../app/api/apiSlice';
import { logOut } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          // Wait for the logout request to complete successfully
          // const data =
          await queryFulfilled;
          // console.log(data);
          // Object { data: {…}, meta: {…} }
          // data: Object { message: "Cookie cleared" }
          // meta: Object { request: Request, response: Response }​​
          // request: Request { method: "POST", url: "http://localhost:3300/auth/logout", referrer: "about:client", … }
          // response: Response { type: "cors", url: "http://localhost:3300/auth/logout", redirected: false, … }

          // Dispatch logout action to update authentication state
          dispatch(logOut());

          // setTimeout(() => {
          //   dispatch(apiSlice.util.resetApiState());
          // }, 1000);

          // Manually reset the API state for a clean state
          /*
          https://redux-toolkit.js.org/rtk-query/api/created-api/api-slice-utils#resetapistate
          Description
          A Redux action creator that can be dispatched to manually reset the api state completely.
          This will immediately remove all existing cache entries, and all queries will be considered 'uninitialized'.
          Note that hooks also track state in local component state and might not fully be reset by resetApiState.
          https://github.com/reduxjs/redux-toolkit/issues/1725
          */
          dispatch(apiSlice.util.resetApiState());
        } catch (error) {
          // An error occurred during logout
          console.error('Error during logout:', error);

          // Even if there's an error, dispatching logout to ensure consistent state
          dispatch(logOut());

          // Handle the error appropriately, e.g., display a user-friendly message.
          // Manually reset the API state to ensure a clean slate despite the error.
          dispatch(apiSlice.util.resetApiState());
        }
      },
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET',
      }),
    }),
  }),
});

// Public API exports for authentication mutations
export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } =
  authApiSlice;
