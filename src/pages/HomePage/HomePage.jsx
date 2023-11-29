// HOME PAGE

import { Link } from 'react-router-dom';

import '../../index.css'
import './HomePage.css'

export default function HomePage({  weatherData, recommendedActivity }) {

	const locationName = weatherData.location.name
	const regionName = weatherData.location.region
	const todayforecast = weatherData.forecast.forecastday[0].day
	const todayAvgTemp = todayforecast.avgtemp_f
	const todayAvgConditionIcon = todayforecast.condition.icon
	const todayAvgConditionText = todayforecast.condition.text

	if (!weatherData) { return <h1>Loading...</h1>}
	return (
		<div className="page-content">
			<div id="today-avg-forecast">
				<h1>Today's Weather</h1>
				<h3>{locationName}, {regionName}</h3>
				<p>Today's Average Temp: {todayAvgTemp}&deg;F</p>
				<img src={todayAvgConditionIcon} className="weather-icon" alt="weather icon"/>
				<p>{todayAvgConditionText}</p>
			</div>
			<div id="today-recommended-activity">
				<h1>Recommended Activity</h1>
				<h3>{recommendedActivity.name}</h3>
				<p>{recommendedActivity.recommendation}</p>
			</div>
				<Link to="/addactivitylog" className="button">Log this Work-Out</Link>
		</div>
	);
}
