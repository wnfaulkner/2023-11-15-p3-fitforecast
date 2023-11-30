import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUser, updateUserState } from "../../utilities/users-service";

export default function EditProfilePage({ user, setUser, fetchWeatherData }) {
    console.log('user at start', user);
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
        user: user._id
    });
    console.log('updateProfile before inputChange', updateProfile);
    console.log('users id', updateProfile.user)
    const handleInputChange = (evt) => {
        setUpdateProfile({...updateProfile, [evt.target.name]: evt.target.value})
    };
    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log('updateProfile Before fetch', updateProfile);
        // console.log('User Before fetch', user);
        try {
            await fetch('http://localhost:3001/api/users/profile/edit', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(updateProfile)
            });
    
            console.log('updateProfile after fetch', updateProfile);
            // console.log('updatedprofile location', updateProfile.location)
            // console.log('user location', user.location)
            // const updatedUser = await updateUserState(updateProfile);
            // console.log('After updateUserState', updatedUser);
            // console.log('user after fetch:', user);
            // fetch refreshtoken -> set in local storage -> navigate
            // if (updateProfile.location !== user.location) {
            //     const response = await fetch(`http://localhost:3001/api/users/refresh-token?userId=${updateProfile.user}`)
            //     const { newToken } = await response.json();
            //     localStorage.setItem('token', newToken);
            // }
            setUser(updateProfile);
            await updateUserState();
            // console.log('user after setUser', user);
            fetchWeatherData()
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