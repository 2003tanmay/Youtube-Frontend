import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Player = ({ url, thumbnail }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const player = videojs(videoRef.current);
    player.src(url);
    player.poster(thumbnail);
    return () => {
      player.dispose();
    };
  }, [url]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js"
        controls
        preload="auto"
        width="100%"
        height="auto"
      ></video>
    </div>
  );
};

export default Player;

