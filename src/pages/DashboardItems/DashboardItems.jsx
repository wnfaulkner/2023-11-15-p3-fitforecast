export default function DashboardItems ({ user }) {
    // console.log(`user from dashboarditems: ${user}`)
    const userName = user.name;
    // console.log(`userName is: ${userName}`)
    const userLocation = user.location;
    // const numLoggedActivities = user.activitiesLogged;
    function getNumofLoggedActivities(u) {
        // count the length of the array user.activitiesLogged
        return u.activitiesLogged.length
    };
    const numLoggedActivities = getNumofLoggedActivities(user)
    // console.log(`numLoggedActivities: ${numLoggedActivities}`)
    
    return (
        <table>
            <thead>
                <tr>
                    <th>User |</th>
                    <th>Location |</th>
                    <th>Number of Activities Logged</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{userName}</td>
                    <td>{userLocation}</td>
                    <td>{numLoggedActivities}</td>
                </tr>
            </tbody>
        </table>
    )
}