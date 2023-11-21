// HOME PAGE

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkToken } from "../../utilities/users-service";

export default function HomePage({ user, weatherData, activityList }) {
  
	const locationName = weatherData.location.name
	const regionName = weatherData.location.region

	const todayforecast = weatherData.forecast.forecastday[0].day
	const todayAvgTemp = todayforecast.avgtemp_f
	const todayTotalPrecip = todayforecast.totalprecip_in
	const todayAvgConditionIcon = todayforecast.condition.icon
	const todayAvgConditionText = todayforecast.condition.text
	
	const [recommendedActivity, setRecommendedActivity] = useState('')
	const [notFirstRender, setNotFirstRender] = useState(null)

	async function handleCheckToken() {
		const expDate = await checkToken()
		//console.log(expDate)
	}

	function getRecommendedActivity(activityList) {
	
		// Filtering activities based on weather and temp criteria
		const filteredActivities = activityList.filter(activity => {
			return (
				todayAvgTemp >= activity.minTemp &&
				todayAvgTemp <= activity.maxTemp &&
				todayTotalPrecip >= activity.minPrecip &&
				todayTotalPrecip <= activity.maxPrecip
			);
		});

		// console.log(filteredActivities)

		// Selecting final recommended activity 
		if (filteredActivities.length > 0) {
			const randomIndex = Math.floor(Math.random() * filteredActivities.length);
			//console.log(randomIndex, filteredActivities)
			return {name: filteredActivities[randomIndex].name, recommendation: filteredActivities[randomIndex].recommendation};
			
		} else {
			return {name: "No suitable activities found.", recommendation: 'Pack your bindle and catch the next freight train out of Dodge. Nothin\' doin\' here.'};
		};
		
	}

	useEffect(() => {
    if (!notFirstRender) {
      setRecommendedActivity(getRecommendedActivity(activityList));
			setNotFirstRender(true)
      console.log('RECOMMENDED ACTIVITY STATE UPDATED', notFirstRender);
    }
	}, []) //do this only once when the page first loads
	
	//console.log(recommendedActivity, todayforecast)

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
			<Link to="/addactivity">Log this Work-Out</Link>
		</div>
	);
}
