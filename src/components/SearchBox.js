import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { User } from '../context/UserContext';

const SearchBox = () => {
    const { searchUser, setUserName, userName } = User();
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        setUserName(inputValue);
        searchUser(inputValue);
    };

    return (
        <div className='searchBox-container'>
            <div className='input-btn'>
                <input 
                    type='text' 
                    placeholder='Enter a username...' 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleSearch}><FaSearch /></button>
            </div>
        </div>
    );
};

export default SearchBox;
