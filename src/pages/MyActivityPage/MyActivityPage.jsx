import MyLoggedItems from "../MyLoggedItems/MyLoggedItems";

export default function MyActivityPage({ user }) {
    const activitiesLogged = user.activitiesLogged
    const loggedActivity = activitiesLogged.map((activity, idx) => (
        <MyLoggedItems activity={activity} key={idx} />
    ))
    return (
        <div className="page-content">
            <h1>My Activity Page</h1>
            <ul>
                {loggedActivity}
            </ul>
        </div>
    );
}