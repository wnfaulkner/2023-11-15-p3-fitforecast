import { Link } from 'react-router-dom';
import IconHome from '../../images/icons/IconHome/IconHome.png';
import IconCommunity from '../../images/icons/IconCommunity/IconCommunity.png';
import IconAdd from '../../images/icons/IconAdd/IconAdd.png';
import IconMyActivity from '../../images/icons/IconMyActivity/IconMyActivity.png';
// import * as userService from '../../utilities/users-service';

export default function BottomNavBar() {
    
    return (
        <footer className="bottom-nav">
            <Link to="/home"><img src={IconHome} alt="Home" className="icon-style"/></Link>
            &nbsp;&nbsp;
            <Link to="/communitydashboard"><img src={IconCommunity} alt="Community" className="icon-style"/></Link>
            &nbsp;&nbsp;
            <Link to="/addactivity"><img src={IconAdd} alt="Add Activity"className="icon-style"/></Link>
            &nbsp;&nbsp;
            <Link to="/myactivity"><img src={IconMyActivity} alt="My Activity" className="icon-style"/></Link>
        </footer>
    );
}