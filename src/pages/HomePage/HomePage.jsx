// HOME PAGE

import { Link } from 'react-router-dom';
import { checkToken } from "../../utilities/users-service";

export default function HomePage({ weatherData, activityList }) {
    
	const locationName = weatherData.location.name
	const regionName = weatherData.location.region
	const todayforecast = weatherData.forecast.forecastday[0].day
	const todayAvgTemp = todayforecast.avgtemp_f
	const todayTotalPrecip = todayforecast.totalprecip_in
	const todayAvgConditionIcon = todayforecast.condition.icon
	const todayAvgConditionText = todayforecast.condition.text
	
	//console.log(todayforecast)

	async function handleCheckToken() {
			const expDate = await checkToken()
			console.log(expDate)
	}

	function getRecommendedActivity(activityList) {
	
		// Filtering activities based on weather and temp criteria
		const filteredActivities = activityList.filter(activity => {
			return (
				//activity.weather.includes(currentWeather) &&
				todayAvgTemp >= activity.minTemp &&
				todayAvgTemp <= activity.maxTemp &&
				todayTotalPrecip >= activity.minPrecip &&
				todayTotalPrecip <= activity.maxPrecip
			);
		});

		// Selecting final recommended activity 
		if (filteredActivities.length > 0) {
			const randomIndex = Math.floor(Math.random() * filteredActivities.length);
			return {name: filteredActivities[randomIndex].name, recommendation: filteredActivities[randomIndex].recommendation};
		} else {
				return "No suitable activities found.";
		};
	}

	const recommendedActivity = getRecommendedActivity(activityList)
	console.log(recommendedActivity, todayforecast)

	return (
		<div className="page-content">
			<div id="today-avg-forecast">
				<h1>Today's Weather</h1>
				<p>{locationName}, {regionName}</p>
				<p>Today's Average Temp: {todayAvgTemp}&deg;F</p>
				<img src={todayAvgConditionIcon} />
				<p>{todayAvgConditionText}</p>
			</div>
			<div id="today-recommended-activity">
				<h1>Recommended Activity</h1>
				<h3>{recommendedActivity.name}</h3>
				<p>{recommendedActivity.recommendation}</p>
			</div>
				<Link to="/addactivity" className="button">Log this Work-Out</Link>
		</div>
	);
}





// 	// Randomly selecting an activity from the filtered list
	
// }