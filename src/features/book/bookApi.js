import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "AIzaSyB12vxgTr26rsJH7JLKytyXYpAZZDkDlq8";

export const bookApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.googleapis.com/books/v1",
    }),
    tagTypes: ["books"],
    endpoints: (builder) => ({
        getAllSearchBooks: builder.query({
            query: ({ keyword, size, startIndex }) => ({
                url: `/volumes?q=${keyword}&maxResults=${size}&startIndex=${startIndex}&key=${API_KEY}`,
                method: "GET",
            }),
            providesTags: ["books"],
        }),

        getBooksFromShelves: builder.query({
            query: () => ({
                url: `/mylibrary/bookshelves?key=${API_KEY}`,
                method: "GET",
            }),
            providesTags: ["books"],
        }),
    }),
});

export const { useGetAllSearchBooksQuery, useGetBooksFromShelvesQuery } =
    bookApi;
