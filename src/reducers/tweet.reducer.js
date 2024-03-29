import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isTweetFetching: true,
    userTweet: []
};

const tweetSlice = createSlice({
    name: "tweet",
    initialState,
    reducers: {
        setUserTweet: (state, action) => {
            state.userTweet = action.payload;
            state.isTweetFetching = false;
        },
        clearUserTweet: (state) => {
            state.userTweet = [];
            state.isTweetFetching = true;
        }
    }
});

export const { 
     setUserTweet,
     clearUserTweet
} = tweetSlice.actions;

export default tweetSlice.reducer;