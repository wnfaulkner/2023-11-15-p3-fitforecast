import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import EditUserForm from '../../components/EditUserForm/EditUserForm'
import * as userService from '../../utilities/users-service';

export default function EditProfilePage({ user, setUser }) {
    
    //const [formData, setFormData] = useState("");

    return (
        <div className="page-content">
            <h1> Edit Profile Page</h1>
            <EditUserForm className="sign-up-form" user={user} setUser={setUser} />
        </div>
    );
}