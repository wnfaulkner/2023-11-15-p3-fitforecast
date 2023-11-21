import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import * as userService from '../../utilities/users-service';
import EditProfilePage from '../EditProfilePage/EditProfilePage';

export default function ProfilePage({ user, setUser }) {
    const profilePic = user.profilePic;
    const username = user.name;
    const email = user.email;
    const location = user.location;
    const [editMode, setEditMode] = useState(false);
    const changeToFalse = () => {
        setEditMode(false)

    }

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    
    return (
        <div className="page-content">
            <h1> Profile Page</h1>
            <p>{profilePic}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{location}</p>
            <Link to="" onClick={ handleLogOut } >Log Out</Link>
        </div>
    );
}