import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./book/bookApi";
import bookSlice from "./book/bookSlice";

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        books: bookSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware),
});
