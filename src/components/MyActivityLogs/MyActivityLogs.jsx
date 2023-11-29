// MY ACTIVITY LOGS

import { Link } from "react-router-dom";
import moment from "moment";
import './MyLoggedItems.css';

export default function MyActivityLogs({ activity }) {
    const activityId = activity._id;
    // <EditActivityLogPage currentActivity={activity._id} />
    // console.log('the activity info is:', activity)
    const activityName = activity.name;
    // console.log(activityName)
    const activityType = activity.activityType;
    // console.log('type:',activityType)
    const inOut = activity.inOut;
    // console.log('inOut:', inOut)
    const duration = activity.duration;
    // console.log('duration:',duration)
    const details = activity.details;
    // console.log('details:',details)
    const rating = activity.rating;
    // console.log('rating:',rating)
    const date = moment.utc(new Date(activity.date)).format('YYYY-MM-DD')
    console.log(new Date(activity.date).toISOString())
    // console.log('date:',date)
    return (
        <div className="activity">
            <Link to={`/myactivity/edit/${activityId}`} className="activity-link">
            <div className="activity-row">
                {date && <li>{date}</li>}
                {activityType && <li>{activityType}</li>}
                {inOut && <li>{inOut}</li>}
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
