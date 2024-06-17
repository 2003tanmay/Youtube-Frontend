import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setVideoData, clearVideoData } from "./../reducers/playback.reducer.js";
import Player from "./../components/Player.jsx";
import conf from '../conf/conf.js';
import axios from "axios";
import Skeleton from "./../skeletons/WatchVideoSkeleton.jsx"

const VideoPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { isVideoDataFetching, videoData } = useSelector((state) => state.playback);

  useEffect(() => {
    // Check if videoData is present in Redux
    if (!videoData || videoData._id !== videoId) {
      // Fetch video data from backend API using videoId
      fetchVideoData(videoId);
    }

    // Cleanup function
    return () => {
      // Clear videoData from Redux when component unmounts
      dispatch(clearVideoData());
    };
  }, [dispatch, videoId]);

  const fetchVideoData = async (videoId) => {
    try {
      // Make API call to fetch video data using videoId
      const response = await axios.get(`${conf.appBackendBaseUrl}/videos/${videoId}`,
        {
          withCredentials: true
        }
      );
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Failed to fetch video data");
      }
      const videoData = response.data.data;
      // Store videoData in Redux
      dispatch(setVideoData(videoData));
    } catch (error) {
      console.error(error);
    }
  };

  if (isVideoDataFetching || !videoData || videoData._id !== videoId) {
    return <Skeleton />;
  }

  return (
    <div className="p-4">
      <Player url={videoData.videoFile.url} thumbnail={videoData.thumbnail.url} />
      <h2 className="text-2xl font-bold mb-2 text-white">{videoData.title}</h2>
      <p className="text-white mb-2 opacity-60">{videoData.views} views</p>
      <p className="text-lg text-white opacity-60">{videoData.description}</p>
    </div>
  );
};

export default VideoPage;

