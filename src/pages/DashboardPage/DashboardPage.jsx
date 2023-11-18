import { Link } from 'react-router-dom';

export default function DashboardPage( { weatherData }) {
    return (
        <div className="page-content">
            <h1>Community Dashboard Page</h1>
            <p>weatherData[0]</p>
            <Link to="/home">See my FITforecast</Link>
        </div>
    );
}