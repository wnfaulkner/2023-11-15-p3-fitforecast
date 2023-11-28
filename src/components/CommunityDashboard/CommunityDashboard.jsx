// COMMUNITY DASHBOARD COMPONENT

import CommunityDashboardUserCard from "./CommunityDashboardUserCard"

export default function CommunityDashboard ({ allUsers, weatherData }) {
    console.log(weatherData)
    return (
        <div id='community-leader-dashboard'>
            <h1>Community Leaderboard</h1>
            <div id='community-leader-dashboard-items'>
                <div>User</div>
                <div>Location</div>
                <div>Number of Activities Logged</div>
            </div>
            <ul id='community-dashboard-contents'>
                {allUsers.map(
                    (u, idx) => (
                    <CommunityDashboardUserCard user={u} key={idx} weatherData={weatherData} />
                    )
                )}
            </ul>
        </div>
    )
}