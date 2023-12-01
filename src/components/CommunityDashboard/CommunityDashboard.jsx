// COMMUNITY DASHBOARD COMPONENT

import CommunityDashboardUserCard from "./CommunityDashboardUserCard"

import './CommunityDashboard.css'

export default function CommunityDashboard ({ allUsers }) {

    return (
        <div id='community-leader-dashboard'>
            <h2>Community Leaderboard</h2>
            <div id='community-leader-dashboard-headers'>
                <div className="grid-item">User</div>
                <div className="grid-item">Location</div>
                <div className="grid-item"># of Activities</div>
            </div>
            <ul id='community-leader-dashboard-contents'>
                {allUsers.map(
                    (u, idx) => (
                    <CommunityDashboardUserCard user={u} key={idx} />
                    )
                )}
            </ul>
        </div>
    )
}