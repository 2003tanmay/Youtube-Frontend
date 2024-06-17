import React from "react";

const WatchVideoSkeleton = () => {
  return (
    <div className="p-4">
      <div className="h-96 bg-gray-200 opacity-10 animate-pulse mb-2"></div>
      <div className="animate-pulse opacity-10">
        <div className="h-12 bg-gray-200 mb-4"></div>
        <div className="h-4 bg-gray-200 w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-200 mb-2"></div>
      </div>
    </div>
  );
};

export default WatchVideoSkeleton;
