export default function MyActivityPage({ user }) {
    return (
        <div className="page-content">
            <h1>My Activity Page</h1>
            {user.activitiesLogged.name}
            {user.activitiesLogged.activityType}
            {user.activitiesLogged.duration}
        </div>
    );
}