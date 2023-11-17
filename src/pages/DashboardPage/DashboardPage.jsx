import { Link } from 'react-router-dom';

export default function DashboardPage() {
    return (
        <div className="page-content">
            <h1>Community Dashboard Page</h1>
            <Link to="/home">See my FITforecast</Link>
        </div>
    );
}