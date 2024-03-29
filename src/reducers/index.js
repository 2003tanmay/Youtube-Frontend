import { combineReducers } from "redux";

// reducers
import userSlice from "./user.reducer.js";
import channelSlice from "./channel.reducer.js";
import playbackSlice from "./playback.reducer.js";
import playlistSlice from "./playlist.reducer.js";
import searchSlice from "./search.reducer.js";
import tweetSlice from "./tweet.reducer.js";
import videoSlice from "./video.reducer.js";

export default combineReducers({
  user: userSlice,
  channel: channelSlice,
  playback: playbackSlice,
  playlist: playlistSlice,
  search: searchSlice,
  tweet: tweetSlice,
  video: videoSlice
});