import React, { useState } from 'react'
import { timeSince } from "../utils";

const VideoCard = ({ video }) => {
    return (
        <div className="w-[374px] mx-3 inline-block align-top mb-6">
            <div className='p-0 block'>
                <img className="w-full min-h-full m-auto object-cover brightness-90 rounded-lg" src={video.thumbnail.url} alt="thumbnail" />
                <div className="mt-1 flex flex-row">
                    <div className="mt-4 flex-shrink-0">
                        <div className="w-10 h-10 inline-block overflow-hidden">
                            <img className="w-full h-full brightness-90 overflow-clip rounded-full" src={video.ownerDetails.avatar.url} alt="channel avatar" />
                        </div>
                    </div>
                    <div className="flex ml-[12px] items-start mt-3 flex-col min-w-0">
                        <h4 className="font-medium text-white text-2xl overflow-hidden text-ellipsis mb-[3px]">
                            {video.title.length > 40
                                ? video.title.substring(0, 40) + "..."
                                : video.title}
                        </h4>
                        <div className='break-words overflow-hidden text-ellipsis text-white inline opacity-60'>
                            <span className='mr-1'>{video.ownerDetails.fullname}</span>
                            <span className='mr-1'>•</span>
                            <span className='mr-1'>{video.views || 0} views</span>
                            <span className='mr-1'>•</span>
                            <span className='mr-1'>{timeSince(video.createdAt)} ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
