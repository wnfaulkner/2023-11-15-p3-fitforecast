// HOME PAGE

import { Link } from 'react-router-dom';
import { checkToken } from "../../utilities/users-service";

export default function HomePage({ weatherData }) {
    
    const locationName = weatherData.location.name
    
    console.log(locationName);

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <div className="page-content">
            <h1>Today's Weather</h1>
            <p>{locationName}</p>
            <Link to="/addactivity">Log this Work-Out</Link>
        </div>
    );
}