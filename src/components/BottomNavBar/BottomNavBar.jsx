import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function BottomNavBar({ user, setUser }) {
    
    function handleLogOut() {
        userService.logOut();

        setUser(null);
    }
    
    return (
        <nav>
            <Link to="/home">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/communitydashboard">Community Dash</Link>
            &nbsp; | &nbsp;
            <Link to="/addactivity">Add Activity</Link>
            &nbsp; | &nbsp;
            <Link to="/myactivity">My Activity</Link>
        </nav>
    );
}