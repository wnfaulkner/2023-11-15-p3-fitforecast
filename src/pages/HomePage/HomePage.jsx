// HOME PAGE

import { Link } from 'react-router-dom';

export default function HomePage({  weatherData, recommendedActivity }) {
  
	//console.log(weatherData)

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
				<p>{locationName}, {regionName}</p>
				<p>Today's Average Temp: {todayAvgTemp}&deg;F</p>
				<img src={todayAvgConditionIcon} className="weather-icon"/>
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
