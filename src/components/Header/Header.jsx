import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UploadVideoIcon, YoutubeIcon, SearchIcon, HamburgerIcon } from "../../assets/Icons";
import { toggleSidebar } from "./../../reducers/sidebar.reducer";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = ({ onUserProfileClick, onSearchBarClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search_query=/${encodeURIComponent(searchTerm)}`);
};

  return (
    <div className="fixed top-0 w-full z-[2020] transition-transform transform translate-y-0 ease-in-out duration-300">
      <div className="absolute w-full h-14 bg-gray-950 opacity-100 z-0"></div>
      <div className="h-14 px-4 flex flex-row items-center justify-between z-10">
        <div id="start" className="flex flex-row items-center h-14 m-0 p-0 border-0 bg-transparent">
          <div className="flex items-center justify-center text-white w-15 h-14 relative font-[0]" onClick={handleToggleSidebar}>
            <div className="h-10 w-10 p-0 hover:bg-zinc-800 rounded-full cursor-pointer line-height-0 flex items-center justify-center">
              <HamburgerIcon />
            </div>
          </div>
          <Link to="/" className="h-14 w-32 flex items-center justify-center">
            <div className="flex flex-row items-center w-24 h-10">
              <div className="w-full h-full flex items-center justify-center z-50">
                <YoutubeIcon />
              </div>
            </div>
          </Link>
        </div>
        <div id="center" className="grow shrink min-w-0 max-w-2xl flex flex-row items-center m-0 p-0 border-0 bg-transparent">
          <form onSubmit={handleSubmit} className="mx-10 px-1 grow shrink flex-shrink-1 flex ">
            <div className="h-10 relative grow flex-shrink-1 flex flex-row m-0 p-0 border-0 bg-transparent">
              <div className="relative items-center bg-gray-950 border border-solid border-[#303030] focus-within:border-[#1c62b9] rounded-l-[40px] flex grow shrink flex-row caret-white pr-1 pl-4 ">
                <input id="search" name="search_query" type="text" autoCapitalize="none" autoComplete="off" autoCorrect="off" tabIndex="0" spellCheck="false" placeholder="Search" className="search-bar brightness-90 bg-transparent outline-none text-white w-full" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} onClick={onSearchBarClick}></input>
              </div>
            </div>
            <div className="border border-solid border-[#303030] rounded-r-[40px] cursor-pointer h-10 w-16 m-0 z-10 flex items-center justify-center bg-[#303030]">
              <button type="submit" className="w-6 h-6 ">
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
        <div id="end" className="flex flex-row min-w-225px items-center justify-end z-10">
          <div className="flex flex-row items-center m-0 p-0 border-0 bg-transparent">
            <div className="hover:bg-zinc-800 rounded-full flex items-center justify-center mr-2 cursor-pointer w-10 h-10">
              <NavLink
                to="/channel/uploadVideo"
              >
                <UploadVideoIcon />
              </NavLink>
            </div>
            <div className="flex items-center justify-center mr-2 cursor-pointer w-16 h-10">
              <img className="user-avatar w-9 h-9 rounded-full" src={user ? user.avatar.url : ""} alt="User Avatar" onClick={onUserProfileClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;