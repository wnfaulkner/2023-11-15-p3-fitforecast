export default function CommunityDashboard ({ user, allUsers, weatherData }) {
    //const userName = user.name;
    //const userLocation = weatherData.location

    // function getNumofLoggedActivities(u) {
    //     // count the length of the array user.activitiesLogged
    //     return u.activitiesLogged.length
    // };
    // const numLoggedActivities = getNumofLoggedActivities(user)
    // console.log(`numLoggedActivities: ${numLoggedActivities}`)
    
    // console.log(`allUsers: ${allUsers}`)
    //const communityDashboardRow = );

    return (
        <div id='community-leader-dashboard'>
            <h1>Community Leaderboard</h1>
            <div id='community-leader-dashboard-items'>
                <div>User</div>
                <div>Location</div>
                <div>Number of Activities Logged</div>
            </div>
            <div id='community-dashboard-table-contents'>
                {allUsers.map(
                    (user, idx) => (
                    <CommunityDashboardUserCard user={user} key={idx} weatherData={ weatherData } />
                    )
                )}
            </div>
            {/* 
          </div>
          
        <div class='community-dashboard-user-row'>
            <div>{userName}</div>
            <div>{userLocation.name}, {userLocation.country}</div>
            <div>{numLoggedActivities}</div> */}
        </div>
    )
}