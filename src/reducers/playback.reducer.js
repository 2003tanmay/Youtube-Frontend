import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVideoDataFetching: true,
    videoData: null,
    isVideoCommentFetching: true,
    videoComment: []
};

const playbackSlice = createSlice({
    name: "playback",
    initialState,
    reducers: {
        setVideoData: (state, action) => {
            state.videoData = action.payload;
            state.isVideoDataFetching = false;
        },
        clearVideoData: (state) => {
            state.videoData = [];
            state.isVideoDataFetching = true;
        },
        setVideoComment: (state, action) => {
            state.videoComment = action.payload;
            state.isVideoCommentFetching = false;
        },
        addCommentToVideo: (state, action) => {
            state.videoComment.push(action.payload);
        },
        updateCommentOfVideo: (state, action) => {
            const { commentId, updatedComment } = action.payload;
            const commentIndex = state.videoComment.findIndex(comment => comment._id === commentId);
            if (commentIndex !== -1) {
                state.comments[commentIndex] = { ...state.videoComment[commentIndex], ...updatedComment };
            }
        },
        removeCommentOfVideo: (state, action) => {
            const commentId = action.payload;
            state.videoComment = state.videoComment.filter(comment => comment._id !== commentId);
        },
        clearVideoComments: (state) => {
            state.videoComment = [];
            state.isVideoCommentFetching = true;
        }
    }
});

export const {
    setVideoData,
    clearVideoData,
    setVideoComment,
    addCommentToVideo,
    updateCommentOfVideo,
    removeCommentOfVideo,
    clearVideoComments
} = playbackSlice.actions;

export default playbackSlice.reducer;