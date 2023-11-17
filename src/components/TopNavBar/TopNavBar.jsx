import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function TopNavBar({ user, setUser }) {
    
    function handleLogOut() {
        userService.logOut();

        setUser(null);
    }
    
    return (
        <nav className="top-nav">
            <span>Welcome, {user.name} </span>
            &nbsp;&nbsp;
            <Link to="" onClick={ handleLogOut } >Log Out</Link>
        </nav>
    );
}