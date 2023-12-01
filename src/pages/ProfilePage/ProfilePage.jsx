import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { getUser } from '../../utilities/users-service';
import { useNavigate } from "react-router-dom";

import './ProfilePage.css'

export default function ProfilePage({ user, setUser }) {
    const navigate = useNavigate();
    
    // const profilePic = user.profilePic;
    const username = user.name;
    const email = user.email;
    const location = user.location;

    // once we make the JWT change then uncomment this useEffect
    // useEffect(() => {
    //     console.log(getUser())
    //     setUser(getUser());
    //   }, [navigate]);
    
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <div >
            <div className="user-profile big-margin">
            <h2 className="header">Your Profile</h2>
                {/* <p>{profilePic}</p> */}
                <p>{username}</p>
                <p>{email}</p>
                <p>{location}</p>
                <Link to="/profile/edit" className="profile-button">Edit Profile</Link>
                <Link to="" onClick={ handleLogOut } className="profile-button" id="logout-button">Log Out</Link>
            </div>
            <div className="margin">
            </div>
        </div>
    );
}