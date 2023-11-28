// TOP NAV BAR FOR DESKTOP VIEW

import { Link } from 'react-router-dom';
import Logo from '../../images/Logo/Logo.png';
import IconProfile from '../../images/icons/IconProfile/IconProfile.png';

export default function TopNavBarDesktop({ user, setUser }) {
    
    return (
        <nav className="top-nav-desktop">
            <img src={Logo} alt="Logo" className="icon-style"/>
            <Link to="/home">HOME</Link>
            &nbsp;&nbsp;
            <Link to="/communitydashboard">FITforecast</Link>
            &nbsp;&nbsp;
            <Link to="/addactivity">LOG AN ACTIVITY</Link>
            &nbsp;&nbsp;
            <Link to="/myactivity">MY ACTIVITIES</Link>
            <Link to="/profile"><img src={IconProfile} alt="Profile" className="icon-style"/></Link>
        </nav>
    );
}