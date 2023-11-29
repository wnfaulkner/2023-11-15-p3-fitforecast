import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUser, updateUserState } from "../../utilities/users-service";
import { updateToken } from "../../utilities/users-api";

export default function EditProfilePage({ user, setUser }) {
    // console.log('user at start', user);
    const { userId } = useParams();
    const profilePic = user.profilePic;
    const username = user.name;
    const email = user.email;
    const location = user.location;
    
    const navigate = useNavigate();
    const [updateProfile, setUpdateProfile] = useState({
        profilePic: user.profilePic,
        name: user.name,
        email: user.email,
        location: user.location,
        user: user
    });
    console.log('updateProfile before inputChange', updateProfile);
    
    const handleInputChange = (evt) => {
        setUpdateProfile({...updateProfile, [evt.target.name]: evt.target.value})
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        // console.log('updateProfile Before fetch', updateProfile);
        // console.log('User Before fetch', user);
        try {
            // if (updateProfile.location !== user.location) {
            //     // If the location is updated, refresh the session token
                const response = await fetch('http://localhost:3001/api/users/update-token', {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                });
                const { newToken } = await response.json();
            //     // Store the new token securely (consider using HttpOnly cookies)
                localStorage.setItem('token', newToken);
                updateToken();
            // }

            await fetch('http://localhost:3001/api/users/profile/edit', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(updateProfile)
            });

            // console.log('updateProfile after fetch', updateProfile);
            // const updatedUser = await updateUserState(updateProfile);
            // console.log('After updateUserState', updatedUser);
            // console.log('user after fetch:', user);
            // fetch refreshtoken -> set in local storage -> navigate
            setUser(updateProfile);
            // console.log('user after setUser', user);
            navigate('/profile');
        } catch (error) {
            console.error('Location Update Error', error);
        }
    }
    

    return (
        <div className="page-content">
            <form onSubmit={handleSubmit}>
                <h1>Edit Profile Page</h1>
                <p>{profilePic}</p>
                <label htmlFor="">Username:
                <input 
                    type="text"
                    name="name"
                    placeholder={username}
                    value={updateProfile.name}
                    onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">Email:
                <input 
                    type="text"
                    name="email"
                    value={updateProfile.email}
                    onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="">ZIP:
                <input 
                    type="number"
                    name="location"
                    value={updateProfile.location}
                    onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}