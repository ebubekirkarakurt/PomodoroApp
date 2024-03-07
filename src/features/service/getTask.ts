import { BASE_URL } from '@/config/api'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const getTasks = createApi({
    reducerPath: 'getTasks',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => ({
                method:'GET',
            })
        }) 
    })
})

export const { useGetTaskQuery } = getTasks;