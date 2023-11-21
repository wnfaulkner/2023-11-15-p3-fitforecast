import React from "react";
import { useState } from 'react';

export default function EditProfilePage() {
    return (
        <div className="page-content">
            <h1> Edit Profile Page</h1>
            <p>{profilePic}</p>
            <p>{username}</p>
            <input type="text" id="textInput" placeholder="Update Location">
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel} />
            <p>{location}</p>
            <Link to="" onClick={ handleLogOut } >Log Out</Link>
        </div>
    );
    );
}