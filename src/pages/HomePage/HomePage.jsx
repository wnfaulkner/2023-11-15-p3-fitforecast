// HOME PAGE

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { checkToken } from "../../utilities/users-service";

export default function HomePage({ user, weatherData, recommendedActivity }) {
  
	console.log(recommendedActivity)

	const locationName = weatherData.location.name
	const regionName = weatherData.location.region
	const todayforecast = weatherData.forecast.forecastday[0].day
	const todayAvgTemp = todayforecast.avgtemp_f
	const todayTotalPrecip = todayforecast.totalprecip_in
	const todayAvgConditionIcon = todayforecast.condition.icon
	const todayAvgConditionText = todayforecast.condition.text

	async function handleCheckToken() {
		const expDate = await checkToken()
		//console.log(expDate)
	}

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
