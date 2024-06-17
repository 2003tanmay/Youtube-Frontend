// components/VideoList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import conf from '../conf/conf.js';
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard.jsx";

const VideoList = ({ query }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // const url = query
        //             ? `${conf.appBackendBaseUrl}/videos/search`
        //             : `${conf.appBackendBaseUrl}/videos`;

        console.log("above api")
        console.log(query)
        const response = await axios.get(`${conf.appBackendBaseUrl}/videos`,
          {
            params: {
              page,
              limit: 10, // Set the limit according to your requirements
              query: query || "", // You can set search query here if needed
              sortType: "desc", // Set the default sort type
              sortBy: "uploadDate", // Set the default sort by criteria
            },
            withCredentials: true,
          },
        );
        console.log(response.config);
        const data = response.data;
        console.log(data);
        if (data.statusCode === 200) {
          setVideos((prevVideos) => [...prevVideos, ...data.data.docs]);
          setHasMore(data.data.hasNextPage);
        } else {
          setError(data.message || "Failed to fetch videos");
        }
      } catch (error) {
        setError(error.message || "Failed to fetch videos");
      } finally {
        setLoading(false); 
      }
    };

    fetchVideos();
  }, [page, query]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight &&
      !loading &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading && !videos.length) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full h-full pt-3 flex flex-wrap justify-start bg-transparent">
      {videos.map((video) => (
        <Link key={video._id} to={`/watch/${video._id}`}>
          <VideoCard video={video} />
        </Link>
      ))}
      {loading && <div>Loading more...</div>}
    </div>
  );
};

export default VideoList;