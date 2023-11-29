// COMMUNITY DASHBOARD USER CARD

import React from "react";

export default function CommunityDashboardUserCard ({ user, weatherData }) {
  // console.log(weatherData)
  const numActivitiesLogged = user.activitiesLogged.length
  
  return(
    <li className="community-dashboard-user-card">
      <div>{user.name}</div>
      <div>{user.location}</div>
      <div>{numActivitiesLogged}</div>
    </li>
  )
}
