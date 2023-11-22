import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateUserState } from "../../utilities/users-service";

export default function EditProfilePage({ user, setUser }) {
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
    
    const handleLocationChange = (evt) => {
        setUpdateProfile({...updateProfile, [evt.target.name]: evt.target.value})
    };
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await fetch('http://localhost:3001/api/users/profile/edit', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(updateProfile)
            });
            await updateUserState();
            navigate('/profile')
        }catch (error) {
            console.error('Location Update Error', error)
        }
    }

    return (
        <div className="page-content">
            <form onSubmit={handleSubmit}>
                <h1>Edit Profile Page</h1>
                <p>{profilePic}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Current location: {location}</p>
                <input 
                    type="Number"
                    placeholder="Type new zipcode here"
                    name="location"
                    onChange={handleLocationChange}
                /><br/>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}