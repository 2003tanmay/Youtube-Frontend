import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isplaylistFetching: true,
    playlistData: null,
    isUserPlaylistsFetching: true,
    userPlaylists: []
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setPlaylistData: (state, action) => {
            state.playlistData = action.payload;
            state.isplaylistFetching = false;
        },
        clearPlaylistData: (state) => {
            state.playlistData = [];
            state.isplaylistFetching = true;
        },
        setUserPlaylists: (state, action) => {
            state.userPlaylists = action.payload;
            state.isUserPlaylistsFetching = false;
        },
        removeUserPlaylists: (state) => {
            state.userPlaylists = [];
            state.isUserPlaylistsFetching = true;
        },
    }
});

export const { 
     setPlaylistData,
     clearPlaylistData,
     setUserPlaylists,
     removeUserPlaylists
} = playlistSlice.actions;

export default playlistSlice.reducer;