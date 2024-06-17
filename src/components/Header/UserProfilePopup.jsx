import React, { useRef, useEffect } from 'react';
import LogoutBtn from './LogoutBtn';

const UserProfilePopup = ({ onClose }) => {
    const userProfileRef = useRef(null);

    const handleClickOutside = (event) => {
        if (userProfileRef.current && !userProfileRef.current.contains(event.target) && !event.target.classList.contains('user-avatar')) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="z-[2202] w-64 top-0 absolute right-[10%] bg-[#282828] rounded-lg" ref={userProfileRef}>
            <h1 className='text-white'>User Profile</h1>
            <LogoutBtn />
        </div>
    );
}

export default UserProfilePopup;
