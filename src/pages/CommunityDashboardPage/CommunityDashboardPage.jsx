// COMMUNITY DASHBOARD PAGE

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommunityDashboard from '../../components/CommunityDashboard/CommunityDashboard';

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
    <div className="page-content dashboard-layout">
      <h1>Today's Forecast for {locationName}</h1>
      <img src={todayAvgConditionIcon} className="weather-icon" alt=''/>
      <div className="weather-text">{todayAvgConditionText}</div>
      <div className="weather-details">
        <p>Temperature (Avg.): {todayAvgTemp}°F</p>
        <p>UV Index: Level {todayUv}</p>
        <p>Chance of Rain: {chanceOfRain}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind (Max): {wind}mph</p>
        <br/>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
        <p>Moon Phase: {moonPhase}</p>
        <br/>
      </div>
      <Link to="/home" className="button">See my FITforecast</Link>
      <div>
        <CommunityDashboard weatherData={weatherData} allUsers={allUsers} />
      </div>
    </div>
  );
}