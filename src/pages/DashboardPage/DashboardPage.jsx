import { Link } from 'react-router-dom';

export default function DashboardPage({ weatherData }) {
    // console.log(weatherData);  
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
        <h1>{locationName}'s Forecast</h1>
        <img src={todayAvgConditionIcon} className="weather-icon"/>
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
          <p></p>
      </div>
    );
}