import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetching: true,
    searchHistory: []
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchHistory: (state, action) => {
            state.searchHistory = action.payload;
            state.isFetching = false;
        },
        addSearchQuery: (state, action) => {
            state.searchHistory.push(action.payload);
        },
        removeSearchQuery: (state, action) => {
            state.searchHistory = state.searchHistory.filter(query => query !== action.payload);
        },
        clearSearchHistory: (state) => {
            state.searchHistory = [];
            state.isFetching = true;
        }
    }
});

export const { 
    setSearchHistory, 
    addSearchQuery, 
    removeSearchQuery, 
    clearSearchHistory 
} = searchSlice.actions;

export default searchSlice.reducer;