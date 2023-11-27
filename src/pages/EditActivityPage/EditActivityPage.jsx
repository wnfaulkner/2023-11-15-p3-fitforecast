import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAct, getActs, updateAct, deleteAct } from '../../utilities/activity-service';
import { updateUserState } from '../../utilities/users-service';
import moment from 'moment';

export default function EditActivityPage() {
    const navigate = useNavigate();
    const { activityId } = useParams();
    const [currentActivity, setCurrentActivity] = useState(null);
    const [activities, setActivities] = useState(null); // Declare the state variable
    console.log(`the current activity is: ${currentActivity}`);
    console.log(`the current activityID is: ${activityId}`);
  
  useEffect(() => {
    async function settingAct() {
      const setAct = await getAct(activityId);
      console.log('setAct:', setAct);
      setCurrentActivity(setAct);
    }
    settingAct();
    }, [activityId]);
    // function handleInputChange (evt) {
    //     setCurrentActivity((oldActivity) => ({...oldActivity,[evt.target.name]:evt.target.value}));
    // }
    function handleInputChange(evt) {
        setCurrentActivity((oldActivity) => ({
            ...oldActivity,
            [evt.target.name]:
                evt.target.name === 'date'
                    ? new Date(evt.target.value).toISOString().split('T')[0]
                    : evt.target.value,
        }));
    }
    async function handleSubmit (evt) {
        evt.preventDefault();
        try {
            const formattedDate = new Date(currentActivity.date).toISOString();
            setCurrentActivity((oldActivity) => ({
            ...oldActivity,
            date: formattedDate,
        }));
            await updateAct(currentActivity);
            navigate('/myactivity')
        } catch (err) {
            console.log('Error submitting new activity details', err);
        }
    }
    async function handleDelete() {
        try {
            await deleteAct(currentActivity._id); // Assuming you have a deleteAct function
            await updateUserState(); // Assuming you have this function to update user state
            navigate('/myactivity');
        } catch (err) {
            console.log('Error deleting activity:', err);
        }
    }
    if (!currentActivity) { return <h1>Loading....</h1>}
    return (
        <div className="page-content">
            <h1>Edit Activity Page</h1>
            <form onSubmit={handleSubmit}>
            <input 
                    type="text" 
                    placeholder={currentActivity.name}
                    name="name"
                    value={currentActivity.name}
                    onChange={handleInputChange}
                    /><br/>
                <label htmlFor="">currentActivity Type
                    <select 
                        name="currentActivityType"
                        value={currentActivity.activityType}
                        onChange={handleInputChange}
                        >
                        <option value="Run">Run</option>
                        <option value="Hike">Hike</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Walk">Walk</option>
                        <option value="Weights">Weights</option>
                        <option value="Meditation">Meditation</option>
                    </select>
                </label>
                <input
                    type="date"
                    // value={new Date(currentActivity.date).toLocaleDateString().split('T')[0]}
                    value={moment.utc(currentActivity.date).format('YYYY-MM-DD')}
                    onChange={handleInputChange}
                    name="date"
                /><br/>
                <label htmlFor="">Indoor/Outdoor
                    <select 
                        name="inOut"
                        value={currentActivity.inOut}
                        onChange={handleInputChange}>
                        <option value="Indoor">Indoor</option>
                        <option value="Outdoor">Outdoor</option>
                    </select>
                </label>
                <label htmlFor="">Duration
                    <select 
                    name="duration"
                    value={currentActivity.duration}
                    onChange={handleInputChange}
                    >
                        <option value="0-30mins">0-30mins</option>
                        <option value="30mins-1hr">30mins-1hr</option>
                        <option value="1hr-2hr">1hr-2hr</option>
                        <option value="2hr+">2hr+</option>
                    </select>
                </label>
                <label htmlFor="">Rating
                    <select 
                    name="rating"
                    value={currentActivity.rating}
                    onChange={handleInputChange}
                    >
                        <option value="1">★</option>
                        <option value="2">★★</option>
                        <option value="3">★★★</option>
                        <option value="4">★★★★</option>
                        <option value="5">★★★★★</option>
                    </select>
                </label>
                <input 
                type="text"
                name="details"
                placeholder="Description"
                value={currentActivity.description}
                onChange={handleInputChange}
                /><br/>
                <button type="submit" >Update Activity</button>
            </form>
                <button type="button" onClick={handleDelete}>Delete Activity</button>
        </div>
    );
}