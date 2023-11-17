import { Link } from 'react-router-dom';
import IconHome from '../../images/icons/IconHome/IconHome.png';
import IconCommunity from '../../images/icons/IconCommunity/IconCommunity.png';
import IconAdd from '../../images/icons/IconAdd/IconAdd.png';
import IconMyActivity from '../../images/icons/IconMyActivity/IconMyActivity.png';
// import * as userService from '../../utilities/users-service';

export default function BottomNavBar({ user, setUser }) {
    
    // function handleLogOut() {
    //     userService.logOut();

    //     setUser(null);
    // }
    
    return (
        <footer className="bottom-nav">
            <Link to="/home"><img src={IconHome} alt="Home" /></Link>
            &nbsp;&nbsp;
            <Link to="/communitydashboard"><img src={IconCommunity} alt="Community" /></Link>
            &nbsp;&nbsp;
            <Link to="/addactivity"><img src={IconAdd} alt="Add Activity" /></Link>
            &nbsp;&nbsp;
            <Link to="/myactivity"><img src={IconMyActivity} alt="My Activity" /></Link>
        </footer>
    );
}