// TopNavBarDesktop.jsx

import { Link } from 'react-router-dom';
import Logo from '../../images/Logo/Logo.png';
import IconProfile from '../../images/icons/IconProfile/IconProfile.png';
import './TopNavBarDesktop.css';

export default function TopNavBarDesktop({ user, setUser }) {
  return (
    <nav className="background">
        <img src={Logo} alt="Logo" className="icon-style" />
        <div>
            <Link to="/home" className="desktop">
                HOME
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/communitydashboard" className="desktop">
                FITforecast
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/addactivitylog" className="desktop">
                LOG AN ACTIVITY
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/myactivitylogs" className="desktop">
                MY ACTIVITY LOGS
            </Link>
        </div>
        <Link to="/profile">
            <img src={IconProfile} alt="Profile" className="icon-style" />
        </Link>
    </nav>
  );
}