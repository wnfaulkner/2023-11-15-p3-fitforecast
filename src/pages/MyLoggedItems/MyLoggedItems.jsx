export default function MyLoggedItems({ activity }) {
    const activityName = activity.name;
    return (
        <li>{activityName}</li>
    )
}