import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function ProfilePage({ user, setUser }) {
    const profilePic = user.profilePic;
    const username = user.name;
    const email = user.email;
    const location = user.location;

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
            <button type="submit">Edit Location</button>
            <p>
            <Link to="" onClick={ handleLogOut } className="log-out-button">Log Out</Link>
            </p>
        </div>
    );
}