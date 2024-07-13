import React from 'react';
import SearchBox from './SearchBox';
import { User } from '../context/UserContext';
import { IoCloseSharp } from "react-icons/io5";

const Profile = () => {
    const { userData, clearUserData, error } = User();

    const handleVisitProfile = () => {
        window.open(userData.html_url, "_blank");
    };

    const handleCloseProfile = () => {
        clearUserData();
    };

    return (
        <div className='profile-container'>
            <div className='search-input'>
                <SearchBox />
            </div>
            <div style={{ marginTop: "20px" }}>
                {error ? (
                    <h1>{error}</h1>
                ) : !userData ? (
                    <h1></h1>
                ) : (
                    <div className='display_user_container'>
                        <div className='user_data_container'>
                            <IoCloseSharp className="close-icon" onClick={handleCloseProfile} />
                            <div className="image_container">
                                <img src={userData.avatar_url} alt="" />
                                <button className='visit-profile' onClick={handleVisitProfile}>Visit Profile</button>
                            </div>
                            <div className="data_container">
                                <h1><span className='span_tag'>Username:</span> <span className='user_data'>{userData.login}</span></h1>
                                <h1><span className='span_tag'>Name:</span> <span className='user_data'>{userData.name}</span></h1>
                                <div className="inner_data_container">
                                    <h3 className='box'><span className='span_tag'>No. of public repos:</span>  <span className='user_data'>{userData.public_repos}</span></h3>
                                    <h3 className='box'><span className='span_tag'>No. of public gists:</span> <span className='user_data'>{userData.public_gists}</span></h3>
                                </div>
                                <h3 className='box'><span className='span_tag'>Profile created:</span> <span className='user_data'>{userData && userData.created_at.slice(0, 10)}</span></h3>
                                <p>{userData.bio}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
