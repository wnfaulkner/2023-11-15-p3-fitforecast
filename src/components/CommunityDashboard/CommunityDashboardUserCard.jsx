// COMMUNITY DASHBOARD USER CARD

import React from "react";

import './CommunityDashboardUserCard.css'

export default function CommunityDashboardUserCard ({ user }) {

  const numActivitiesLogged = user.activitiesLogged.length
  
  return(
    <li className="community-leader-dashboard-user-card">
      <div className="grid-item">{user.name}</div>
      <div className="grid-item">{user.location}</div>
      <div className="grid-item">{numActivitiesLogged}</div>
    </li>
  )
}
