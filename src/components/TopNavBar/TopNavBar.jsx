import { Link } from 'react-router-dom';
// import * as userService from '../../utilities/users-service';
import Logo from '../../images/Logo/Logo.png';
import IconProfile from '../../images/icons/IconProfile/IconProfile.png';

export default function TopNavBar({ user, setUser }) {
    
    return (
        <nav className="top-nav">
            <img src={Logo} alt="Logo" className="icon-style"/>
            <Link to="/profile"><img src={IconProfile} alt="Profile" className="icon-style"/></Link>
        </nav>
    );
}