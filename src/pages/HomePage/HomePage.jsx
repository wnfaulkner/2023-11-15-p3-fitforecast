// HOME PAGE

import { Link } from 'react-router-dom';
import { checkToken } from "../../utilities/users-service";

export default function HomePage({ weatherData }) {
    
    const locationName = weatherData.location.name
    const regionName = weatherData.location.region
    const todayAvgTemp = weatherData.forecast.forecastday[0].day.avgtemp_f
    const todayAvgConditionIcon = weatherData.forecast.forecastday[0].day.condition.icon
    const todayAvgConditionText = weatherData.forecast.forecastday[0].day.condition.text
    
    console.log(weatherData)
    console.log(todayAvgConditionIcon);

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <div className="page-content">
            <h1>Today's Weather</h1>
            <p>{locationName}, {regionName}</p>
            <p>Today's Average Temp: {todayAvgTemp}&deg;F</p>
            <img src={todayAvgConditionIcon} />
            <p>{todayAvgConditionText}</p>
            <Link to="/addactivity">Log this Work-Out</Link>
        </div>
    );
}