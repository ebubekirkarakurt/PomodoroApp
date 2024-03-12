import { BASE_URL } from '@/config/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskService = createApi({
  reducerPath: 'getTasks',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => ({
        url: '/tasks',
        method: 'GET',
      }),
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: '/tasks',
        method: 'POST',
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          workTime: data.workTime,
          breakTime: data.breakTime,
          session: data.session,
        }),
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetTaskQuery, useCreateTaskMutation, useDeleteTaskMutation } =
  taskService;
