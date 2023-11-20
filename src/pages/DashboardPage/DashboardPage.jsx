import { Link } from 'react-router-dom';

export default function DashboardPage({ weatherData }) {
    console.log(weatherData);  
    if (!weatherData) {
      // If weatherData is not available yet, you can show a loading message or return null.
      return <p>Loading weather forecast...</p>;
    }

    const locationName = weatherData.location.name;
    const weatherIcon = weatherData.forecast.forecastday.day.condition.icon[0];
    const weatherDescription = weatherData.forecast.forecastday.day.condition.text[0];
    const avgTemp = weatherData.forecast.forecastday.day.avgtemp_f[0];
    const chanceOfRain = weatherData.forecast.forecastday.day.daily_chance_of_rain[0];
    const humidity = weatherData.forecast.forecastday.day.avghumidity[0];
  
    const { day, astro } = weatherData;
  
    return (
      <div className="page-content">
        <h1>{locationName}'s Forecast</h1>
        <div>{weatherIcon}</div>
        <div>{weatherDescription}</div>
        <p>Temperature (Average): {avgTemp}°F</p>
        <p>Chance of rain: {chanceOfRain}%</p>
        <p>Humidity: {day && day.avghumidity}%</p>

        <h6>Last Updated:</h6>
          <p>Sunrise: {astro && astro.sunrise}</p>
          
          <p>Temperature (Low): {day && day.mintemp_f}°F</p>
          <p>Temperature (High): {day && day.maxtemp_f}°F</p>
          
          <p>Sunset: {astro && astro.sunset}</p>
          <Link to="/home">See my FITforecast</Link>
      </div>
    );
}