import React, { useRef, useEffect } from 'react';

const SearchHistoryPopup = ({ onClose }) => {
    const searchHistoryRef = useRef(null);

    const handleClickOutside = (event) => {
        if (searchHistoryRef.current && !searchHistoryRef.current.contains(event.target) && !event.target.classList.contains('search-bar')) {
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
        <div className="z-[2202] w-64 top-0 absolute right-[10%] bg-[#282828] rounded-lg" ref={searchHistoryRef}>
            <h1 className='text-white'>Search History</h1>
        </div>
    );
}

export default SearchHistoryPopup;

