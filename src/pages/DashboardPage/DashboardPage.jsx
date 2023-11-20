import { Link } from 'react-router-dom';

export default function DashboardPage({ weatherData }) {
    if (!weatherData) {
      // If weatherData is not available yet, you can show a loading message or return null.
      return <p>Loading weather data...</p>;
    }
  
    const { day, astro } = weatherData;
  
    return (
      <div className="page-content">
        <h1>Today's Forecast</h1>
        <h6>Last Updated: {last_updated} </h6>
          <p>Sunrise: {astro && astro.sunrise}</p>
          <p>Temperature (Average): {day && day.avg_temp_f}°F</p>
          <p>Temperature (Low): {day && day.mintemp_f}°F</p>
          <p>Temperature (High): {day && day.maxtemp_f}°F</p>
          <p>Humidity: {day && day.avghumidity}%</p>
          <p>Sunset: {astro && astro.sunset}</p>
          <Link to="/home">See my FITforecast</Link>
      </div>
    );
}