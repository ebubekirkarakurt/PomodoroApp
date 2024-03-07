import { BASE_URL } from '@/config/api'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postTask = createApi({
    reducerPath:'postTask',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        post: builder.query({
            query: (body) => ({
                method: 'POST',
                body
            })
        })
    })
})

export const { usePostQuery } = postTask;

