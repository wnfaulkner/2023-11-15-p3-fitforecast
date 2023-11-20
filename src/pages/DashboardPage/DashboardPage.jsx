import { Link } from 'react-router-dom';

export default function DashboardPage({ weatherData }) {
    console.log(weatherData);  
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
    const sunrise = weatherData.forecast.forecastday[0].astro.sunrise;
    const sunset = weatherData.forecast.forecastday[0].astro.sunset;
  
    return (
      <div className="page-content">
        <h1>{locationName}'s Forecast</h1>
        <img src={todayAvgConditionIcon} />
        <div>{todayAvgConditionText}</div>
        <p>Temperature (Avg.): {todayAvgTemp}°F</p>
        <p>UV Index: {todayAvgTemp}°F</p>
        <p>Chance of rain: {chanceOfRain}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind (Max): {wind}mph</p>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
          <Link to="/home">See my FITforecast</Link>
      </div>
    );
}