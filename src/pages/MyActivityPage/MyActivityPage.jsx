export default function MyActivityPage( { user }) {
    const activityName = user.activitiesLogged.length > 0 ? user.activitiesLogged[0].name : "No activities";

    return (
        <div className="page-content">
            <h1>My Activity Page</h1>
            <p>{activityName}</p>
        </div>
    );
}