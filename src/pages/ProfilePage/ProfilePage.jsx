import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function ProfilePage({ user, setUser }) {
    
    // function handleLogOut() {
    //     userService.logOut();
    //     setUser(null);
    // }
    
    return (
        <div className="page-content">
            <h1> Profile Page</h1>
            {/* {user.photo}
            {user.name}
            {user.email}
            {user.location} */}
            {/* <Link to="" onClick={ handleLogOut } >Log Out</Link> */}
        </div>
    );
}