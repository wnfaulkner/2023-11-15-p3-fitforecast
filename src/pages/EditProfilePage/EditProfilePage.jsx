import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function EditProfilePage({ user, setUser }) {
    
    const [formData, setFormData] = useState("");

    async function editUser(evt) {
        evt.preventDefault();
        try {
            //setUser({ location: formData.updatedUserLocation });
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;

            const user = await signUp(formData);
             this.props.setUser(user)

        } catch (error) {

        }
        
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