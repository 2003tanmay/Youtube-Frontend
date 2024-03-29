import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isStateFetching: true,
    isSubscribedFetching: true,
    channelStats: {
        totalSubscribers: 0,
        totalLikes: 0,
        totalVideos: 0,
        totalViews: 0
    },
    subscribedChannels: []
};

const channelSlice = createSlice({
    name: "channel",
    initialState,
    reducers: {
        setChannelStats: (state, action) => {
            state.channelStats = action.payload;
            state.isStateFetching = false;
        },
        clearChannelState: (state) => {
            state.channelStats = {
                totalSubscribers: 0,
                totalLikes: 0,
                totalVideos: 0,
                totalViews: 0
            }
            state.isStateFetching = true;
        }, 
        setSubscribedChannels: (state, action) => {
            state.subscribedChannels = action.payload;
            state.isSubscribedFetching = false;
        },
        addSubscribedChannel: (state, action) => {
            state.subscribedChannels.push(action.payload);
        },
        removeSubscribedChannel: (state, action) => {
            state.subscribedChannels = state.subscribedChannels.filter(channel => channel._id !== action.payload);
        },
        removeAllSubscribedChannels: (state) => {
            state.subscribedChannels = [];
            state.isSubscribedFetching = true;
        }
    }
});

export const { 
    setChannelStats, 
    clearChannelState, 
    setSubscribedChannels, 
    addSubscribedChannel, 
    removeSubscribedChannel, 
    removeAllSubscribedChannels 
} = channelSlice.actions;

export default channelSlice.reducer;