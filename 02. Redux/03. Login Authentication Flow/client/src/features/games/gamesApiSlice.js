import { apiSlice } from '../../app/api/apiSlice';

export const gamesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => '/game',
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApiSlice;
