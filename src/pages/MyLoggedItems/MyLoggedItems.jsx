import { Link } from "react-router-dom";

export default function MyLoggedItems({ activity }) {
    console.log('the activity info is:', activity)
    const activityName = activity.name;
    console.log(activityName)
    const activityType = activity.activityType;
    console.log('type:',activityType)
    const inOut = activity.inOut;
    console.log('inOut:', inOut)
    const duration = activity.duration;
    console.log('duration:',duration)
    const details = activity.details;
    console.log('details:',details)
    const rating = activity.rating;
    console.log('rating:',rating)
    const date = activity.date
    console.log('date:',date)
    return (
            <Link to="/myactivity/edit">
                {date && <li>{date}</li>}
                {activityName && <li>{activityName}</li>}
                {activityType && <li>{activityType}</li>}
                {inOut && <li>{inOut}</li>}
                {duration && <li>{duration}</li>}
                {details && <li>{details}</li>}
                {rating && <li>{rating}</li>}
            </Link>
      );
    }

// export default function MyLoggedItems({ activity }) {
//     const activityName = activity.name;
//     return (
//             <li>{activityName}</li>
//     )
// }