import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isWatchHistoryFetching: true,
    watchHistory: [],
    isUserVideoFetching: true,
    userVideo: [],
    isLikedVideoFetching: true,
    likedVideo: [],
};

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        setWatchHistory: (state, action) => {
            state.watchHistory = action.payload;
            state.isWatchHistoryFetching = false;
        },
        addVideoToWatchHistory: (state, action) => {
            state.watchHistory.push(action.payload);
        },
        removeVideoToWatchHistory: (state, action) => {
            state.watchHistory = state.watchHistory.filter(channel => channel._id !== action.payload);
        },
        removeWatchHistory: (state) => {
            state.watchHistory = [];
            state.isWatchHistoryFetching = true;
        },
        setUserVideo: (state, action) => {
            state.userVideo = action.payload;
            state.isWatchHistoryFetching = false;
        },
        addVideoToUserVideo: (state, action) => {
            state.userVideo.push(action.payload);
        },
        removeVideoToUserVideo: (state, action) => {
            state.userVideo = state.userVideo.filter(channel => channel._id !== action.payload);
        },
        removeUserVideo: (state) => {
            state.userVideo = [];
            state.isWatchHistoryFetching = true;
        },
        setLikedVideo: (state, action) => {
            state.likedVideo = action.payload;
            state.isWatchHistoryFetching = false;
        },
        addVideoToLikedVideo: (state, action) => {
            state.likedVideo.push(action.payload);
        },
        removeVideoToLikedVideo: (state, action) => {
            state.likedVideo = state.likedVideo.filter(channel => channel._id !== action.payload);
        },
        removeLikedVideo: (state) => {
            state.likedVideo = [];
            state.isWatchHistoryFetching = true;
        }
    }
});

export const { 
    setWatchHistory, 
    addVideoToWatchHistory, 
    removeVideoToWatchHistory, 
    removeWatchHistory, 
    setUserVideo, 
    addVideoToUserVideo, 
    removeVideoToUserVideo, 
    removeUserVideo, 
    setLikedVideo, 
    addVideoToLikedVideo, 
    removeVideoToLikedVideo, 
    removeLikedVideo 
} = videoSlice.actions;

export default videoSlice.reducer;
