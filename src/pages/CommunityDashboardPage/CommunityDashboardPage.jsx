// COMMUNITY DASHBOARD PAGE

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommunityDashboard from '../../components/CommunityDashboard/CommunityDashboard';

import './CommunityDashboardPage.css'

export default function CommunityDashboardPage({ user, weatherData }) {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
    .then(response => response.json())
    .then(users => {
      users.sort((a, b) => b.activitiesLogged.length - a.activitiesLogged.length);
      setAllUsers(users);
      // console.log(allUsers)
    })
    .catch( error => console.error('Error fetching all users', error))
  }, [])
  
  if (!weatherData) {
    // If weatherData is not available yet, you can show a loading message or return null.
    return <p>Loading weather forecast...</p>;
  }

  const locationName = weatherData.location.name;
  const todayAvgConditionIcon = weatherData.forecast.forecastday[0].day.condition.icon
  const todayAvgConditionText = weatherData.forecast.forecastday[0].day.condition.text;
  const todayAvgTemp = weatherData.forecast.forecastday[0].day.avgtemp_f;
  const todayUv = weatherData.forecast.forecastday[0].day.uv;
  const chanceOfRain = weatherData.forecast.forecastday[0].day.daily_chance_of_rain;
  const humidity = weatherData.forecast.forecastday[0].day.avghumidity;
  const wind = weatherData.forecast.forecastday[0].day.maxwind_mph;
  const moonPhase = weatherData.forecast.forecastday[0].astro.moon_phase;
  const sunrise = weatherData.forecast.forecastday[0].astro.sunrise;
  const sunset = weatherData.forecast.forecastday[0].astro.sunset;

  return (
    <div className="page-content">
      <div>
        <CommunityDashboard weatherData={weatherData} allUsers={allUsers} />
      </div>
      <h3>Today's Forecast for {locationName}</h3>
      {/* <div className='today-average-condition-summary'> */}
        <img src={todayAvgConditionIcon} className="today-avg-condition-icon" alt='today average condition icon'/>
        <h3 className="today-avg-condition-text">{todayAvgConditionText}</h3>
      {/* </div> */}
      <div className="today-avg-condition-details">
        <div className="grid-item">Temperature (Avg.): {todayAvgTemp}°F</div>
        <div className="grid-item">Chance of Rain: {chanceOfRain}%</div>
        <div className="grid-item">Wind (Max): {wind}mph</div>
        <div className="grid-item">Humidity: {humidity}%</div>
        <div className="grid-item">UV Index: Level {todayUv}</div>
        <div className="grid-item">Sunrise: {sunrise}</div>
        <div className="grid-item">Sunset: {sunset}</div>
        <div className="grid-item">Moon Phase: {moonPhase}</div>
        <br/>
      </div>
      <Link to="/home" className="button">See my FITforecast</Link>
    </div>
  );
}