import React, { useState } from 'react'
import { Header, SideBar, UserProfilePopup, SearchHistoryPopup } from "./components"
import { Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'

const App = () => {
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const [isSearchHistoryOpen, setIsSearchHistoryOpen] = useState(false);

  const toggleUserProfile = () => {
    setIsUserProfileOpen(prevState => !prevState);
  };

  const toggleSearchHistory = () => {
    setIsSearchHistoryOpen(prevState => !prevState);
  };

  const sidebarOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className='block left-0 min-h-full absolute right-0 top-0 m-0 p-0 border-0 bg-gray-950'>
      <Header onUserProfileClick={toggleUserProfile} onSearchBarClick={toggleSearchHistory} />
      <SideBar />
      <main className={`absolute top-0 bottom-0 right-0 left-0 ${sidebarOpen ? 'ml-56' : 'ml-[72px]'} overflow-y-visible mt-14`}>
        <Outlet/>
        {isUserProfileOpen && <UserProfilePopup onClose={toggleUserProfile} />}
        {isSearchHistoryOpen && <SearchHistoryPopup onClose={toggleSearchHistory} />}
      </main>
    </div>
  )
}

export default App