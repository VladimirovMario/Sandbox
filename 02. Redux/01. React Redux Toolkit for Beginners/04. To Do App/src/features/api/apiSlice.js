import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3030';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      // Will make a request like http://localhost:3030/todos
      query: () => '/todos',
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ['Todos'],
    }),
    addToDo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        // When performing a mutation, you typically use a method of
        // PATCH/PUT/POST/DELETE for REST endpoints
        method: 'POST',
        // fetchBaseQuery automatically adds `content-type: application/json` to
        // the Headers and calls `JSON.stringify(todo)`
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),

    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PATCH',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export { apiSlice };

export const {
  useGetTodosQuery,
  useAddToDoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
