import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3300';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Note', 'User'],
  endpoints: (builder) => ({}),
});
