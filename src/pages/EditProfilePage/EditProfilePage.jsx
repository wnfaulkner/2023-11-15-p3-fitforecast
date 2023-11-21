import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
export default function EditProfilePage({ user, setUser }) {
    const [formData, setFormData] = useState("");
    function handleUpdate(evt) {
        evt.preventDefault();
        setUser({ location: formData.updatedUserLocation });
    }
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <div className="page-content">
            <form onSubmit={handleUpdate}>
                <h1> Edit Profile Page</h1>
                <p>{user.profilePic}</p>
                <p>{user.username}</p>
                <p>Current User Location: {user.location}</p>
                <input name="updatedUserLocation"
                    type="text"
                    id="textInput"
                    placeholder="Update Location"
                    onChange={(evt) =>
                    setFormData({
                        ...formData,
                        [evt.target.name]: evt.target.value,})}
                    />
                <button type="submit">Save</button>
                <Link to="" onClick={ handleLogOut } >Log Out</Link>
            </form>
        </div>
    );
}