import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name: "books",
    initialState: {
        keyword: "react",
        size: 10,
        startIndex: 0,
    },
    reducers: {
        setKeyword: (state, { payload }) => {
            state.keyword = payload;
        },

        setStartIndex: (state, { payload }) => {
            state.startIndex = payload * state.size;
        },
    },
});

export const { setKeyword, setStartIndex } = bookSlice.actions;
export default bookSlice.reducer;
