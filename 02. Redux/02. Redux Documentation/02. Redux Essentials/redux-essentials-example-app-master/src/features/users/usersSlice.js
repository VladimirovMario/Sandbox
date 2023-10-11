import { createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

/* Temporarily ignore adapter - we'll use this again shortly
const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();
*/

// Calling `someEndpoint.select(someArg)` generates a new selector that will return
// the query result object for a query with those parameters.
// To generate a selector for a specific query argument, call `select(theQueryArg)`.
// In this case, the users query has no params, so we don't pass anything to select()

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
  }),
});

const selectUsersResult = apiSlice.endpoints.getUsers.select();

const emptyUsers = [];

const selectAllUsers = createSelector(
  selectUsersResult,
  (usersResult) => usersResult?.data ?? emptyUsers
);

const selectUserById = createSelector(
  selectAllUsers,
  (state, userId) => userId,
  (users, userId) => users.find((user) => user.id === userId)
);

export const { useGetUsersQuery } = extendedApiSlice;

export { extendedApiSlice, selectUsersResult, selectAllUsers, selectUserById };

/* Temporarily ignore selectors - we'll come back to this later
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = usersAdapter.getSelectors((state) => state.users)
*/
