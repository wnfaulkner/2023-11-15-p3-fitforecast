import { Link } from 'react-router-dom';
import IconHome from '../../images/icons/IconHome/IconHome.png';
import IconCommunity from '../../images/icons/IconCommunity/IconCommunity.png';
import IconAdd from '../../images/icons/IconAdd/IconAdd.png';
import IconMyActivity from '../../images/icons/IconMyActivity/IconMyActivity.png';
// import * as userService from '../../utilities/users-service';

export default function BottomNavBar() {
    
    return (
        <footer className="bottom-nav">
            <Link to="/home"><img src={IconHome} alt="My Homepage" className="icon-style"/></Link>
            &nbsp;&nbsp;
            <Link to="/communitydashboard"><img src={IconCommunity} alt="Community Dashboard" className="icon-style"/></Link>
            &nbsp;&nbsp;
            <Link to="/addactivitylog"><img src={IconAdd} alt="Add Activity Log"className="icon-style"/></Link>
            &nbsp;&nbsp;
            <Link to="/myactivitylogs"><img src={IconMyActivity} alt="My Activity Logs" className="icon-style"/></Link>
        </footer>
    );
}