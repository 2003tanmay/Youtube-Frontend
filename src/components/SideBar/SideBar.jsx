import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { HomeIcon, SubIcon, YouIcon, TweetIcon, SideArrowIcon, YourChannelIcon, HistoryIcon,LikedVideoIcon
} from "../../assets/Icons";

const Sidebar = () => {

    const sidebarOpen = useSelector((state) => state.sidebar.isOpen);

    return (
        <>
            {!sidebarOpen ? (
                <div className="fixed left-0 bottom-0 top-14 w-[72px] box-border inline-block px-1 bg-gray-950 z-[2028]">
                    <div className="mt-1 flex flex-col m-0 p-0 border-0 bg-transparent">
                        <div className="mb-1 inline-block relative focus-within:bg-zinc-800 hover:bg-zinc-800 bg-gray-950 rounded-[10px]">
                            <NavLink
                                to="/"
                                className="pt-[16px] pb-[14px] outline-none w-16 flex flex-col items-center justify-center cursor-pointer text-white"
                            >
                                <div className="inline-flex items-center justify-center relative align-middle cursor-pointer mb-[6px]">
                                    <HomeIcon />
                                </div>
                                <span className="max-w-full block max-h-6 overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-normal leading-6 m-0 p-0 border-0 bg-transparent">Home</span>
                            </NavLink>
                        </div>
                        <div className="mb-1 inline-block relative focus-within:bg-zinc-800 hover:bg-zinc-800 bg-gray-950 rounded-[10px]">
                            <NavLink
                                to="/feed/subscriptions"
                                className="pt-[16px] pb-[14px] outline-none w-16 flex flex-col items-center justify-center cursor-pointer text-white"
                            >
                                <div className="inline-flex items-center justify-center relative align-middle cursor-pointer mb-[6px]">
                                    <SubIcon />
                                </div>
                                <span className="max-w-full block max-h-6 overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-normal leading-6 m-0 p-0 border-0 bg-transparent">Subscriptions</span>
                            </NavLink>
                        </div>
                        <div className="mb-1 inline-block relative focus-within:bg-zinc-800 hover:bg-zinc-800 bg-gray-950 rounded-[10px]">
                            <NavLink
                                to="/feed/you"
                                className="pt-[16px] pb-[14px] outline-none w-16 flex flex-col items-center justify-center cursor-pointer text-white"
                            >
                                <div className="inline-flex items-center justify-center relative align-middle cursor-pointer mb-[6px]">
                                    <YouIcon />
                                </div>
                                <span className="max-w-full block max-h-6 overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-normal leading-6 m-0 p-0 border-0 bg-transparent">You</span>
                            </NavLink>
                        </div>
                        <div className="mb-1 inline-block relative focus-within:bg-zinc-800 hover:bg-zinc-800 bg-gray-950 rounded-[10px]">
                            <NavLink
                                to="/feed/tweets"
                                className="pt-[16px] pb-[14px] outline-none w-16 flex flex-col items-center justify-center cursor-pointer text-white"
                            >
                                <div className="inline-flex items-center justify-center relative align-middle cursor-pointer mb-[6px]">
                                    <TweetIcon />
                                </div>
                                <span className="max-w-full block max-h-6 overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-normal leading-6 m-0 p-0 border-0 bg-transparent">Tweets</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="fixed top-[-120px] bottom-[-120px] left-0 w-56 bg-gray-950 touch-pan-y z-[2005] right-auto">
                    <div className="absolute top-0 bottom-0 left-0 w-full py-[175px]">
                        <div className="border-b border-solid border-[rgba(255,255,255,0.2)] p-3 z-10 bg-transparent">
                            <div className="m-1 block relative focus-within:bg-zinc-800 hover:bg-zinc-800 rounded-[10px] w-[calc(100%-12px)] min-h-10">
                                <NavLink
                                    to="/"
                                    className="cursor-pointer box-border outline-none text-white flex flex-row items-center w-full"
                                >
                                    <div className="px-3 min-w-0 w-full whitespace-nowrap flex flex-row items-center antialiased text-base font-normal min-h-10">
                                        <div className="mr-6 inline-flex items-center justify-center relative align-middle">
                                            <HomeIcon />
                                        </div>
                                        <span className="text-[16px] leading-8 font-normal text-white overflow-hidden whitespace-nowrap overflow-ellipsis">Home</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="m-1 block relative focus-within:bg-zinc-800 hover:bg-zinc-800 rounded-[10px] w-[calc(100%-12px)] min-h-10">
                                <NavLink
                                    to="/feed/subscriptions"
                                    className="cursor-pointer box-border outline-none text-white flex flex-row items-center w-full"
                                >
                                    <div className="px-3 min-w-0 w-full whitespace-nowrap flex flex-row items-center antialiased text-base font-normal min-h-10">
                                        <div className="mr-6 inline-flex items-center justify-center relative align-middle">
                                            <SubIcon />
                                        </div>
                                        <span className="text-[16px] leading-8 font-normal text-white overflow-hidden whitespace-nowrap overflow-ellipsis">Subscriptions</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="m-1 block relative focus-within:bg-zinc-800 hover:bg-zinc-800 rounded-[10px] w-[calc(100%-12px)] min-h-10">
                                <NavLink
                                    to="/feed/tweets"
                                    className="cursor-pointer box-border outline-none text-white flex flex-row items-center w-full"
                                >
                                    <div className="px-3 min-w-0 w-full whitespace-nowrap flex flex-row items-center antialiased text-base font-normal min-h-10">
                                        <div className="mr-6 inline-flex items-center justify-center relative align-middle">
                                            <TweetIcon />
                                        </div>
                                        <span className="text-[16px] leading-8 font-normal text-white overflow-hidden whitespace-nowrap overflow-ellipsis">Tweets</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="border-b border-solid border-[rgba(255,255,255,0.2)] p-3 z-10 bg-transparent">
                            <div className="m-1 block relative focus-within:bg-zinc-800 hover:bg-zinc-800 rounded-[10px] w-[calc(100%-12px)] min-h-10">
                                <NavLink
                                    to="/feed/you"
                                    className="cursor-pointer box-border outline-none text-white flex flex-row items-center w-full"
                                >
                                    <div className="px-3 min-w-0 w-full whitespace-nowrap flex flex-row items-center antialiased text-base font-normal min-h-10">
                                        <span className="mr-4 text-[19px] leading-8 font-medium text-white overflow-hidden whitespace-nowrap overflow-ellipsis">You</span>
                                        <div className="flex mt-[10px] items-center justify-center relative align-middle">
                                            <SideArrowIcon />
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="m-1 block relative focus-within:bg-zinc-800 hover:bg-zinc-800 rounded-[10px] w-[calc(100%-12px)] min-h-10">
                                <NavLink
                                    to="/channel"
                                    className="cursor-pointer box-border outline-none text-white flex flex-row items-center w-full"
                                >
                                    <div className="px-3 min-w-0 w-full whitespace-nowrap flex flex-row items-center antialiased text-base font-normal min-h-10">
                                        <div className="mr-6 inline-flex items-center justify-center relative align-middle">
                                            <YourChannelIcon />
                                        </div>
                                        <span className="text-[16px] leading-8 font-normal text-white overflow-hidden whitespace-nowrap overflow-ellipsis">Your Channel</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="m-1 block relative focus-within:bg-zinc-800 hover:bg-zinc-800 rounded-[10px] w-[calc(100%-12px)] min-h-10">
                                <NavLink
                                    to="/feed/history"
                                    className="cursor-pointer box-border outline-none text-white flex flex-row items-center w-full"
                                >
                                    <div className="px-3 min-w-0 w-full whitespace-nowrap flex flex-row items-center antialiased text-base font-normal min-h-10">
                                        <div className="mr-6 inline-flex items-center justify-center relative align-middle">
                                            <HistoryIcon />
                                        </div>
                                        <span className="text-[16px] leading-8 font-normal text-white overflow-hidden whitespace-nowrap overflow-ellipsis">History</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="m-1 block relative focus-within:bg-zinc-800 hover:bg-zinc-800 rounded-[10px] w-[calc(100%-12px)] min-h-10">
                                <NavLink
                                    to="/channel/likedVideos"
                                    className="cursor-pointer box-border outline-none text-white flex flex-row items-center w-full"
                                >
                                    <div className="px-3 min-w-0 w-full whitespace-nowrap flex flex-row items-center antialiased text-base font-normal min-h-10">
                                        <div className="mr-6 inline-flex items-center justify-center relative align-middle">
                                            <LikedVideoIcon />
                                        </div>
                                        <span className="text-[16px] leading-8 font-normal text-white overflow-hidden whitespace-nowrap overflow-ellipsis">Liked Video</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default Sidebar;