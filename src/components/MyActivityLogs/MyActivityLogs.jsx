// MY ACTIVITY LOGS

import { Link } from "react-router-dom";
import moment from "moment";
import './MyLoggedItems.css';

export default function MyActivityLogs({ activity }) {
    const activityId = activity._id;
    const activityName = activity.name;
    const activityType = activity.activityType;
    const indoorOutdoor = activity.indoorOutdoor;
    const duration = activity.duration;
    const details = activity.details;
    const rating = activity.rating;
    const date = moment.utc(new Date(activity.date)).format('YYYY-MM-DD')

    return (
        <div className="activity">
            <Link to={`/myactivity/edit/${activityId}`} className="activity-link">
            <div className="activity-row">
                {date && <li>{date}</li>}
                {activityType && <li>{activityType}</li>}
                {indoorOutdoor && <li>{indoorOutdoor}</li>}
                {duration && <li>{duration}</li>}
                {rating && <li>{rating}</li>}
            </div>
            <div className="activity-row activity-name">                
                {activityName && <li>{activityName}</li>}
            </div>
            <div className="activity-row"> 
                {details && <li>{details}</li>}
            </div>
            </Link>
        </div>
      );
    }
