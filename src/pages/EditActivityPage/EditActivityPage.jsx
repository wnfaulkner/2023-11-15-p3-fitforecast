import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { updateUserState } from "../../utilities/users-service";
import { act } from 'react-dom/test-utils';


export default function EditActivityPage({currentActivity}) {
    const { activityId } = useParams();
    console.log(`the current activity is: ${currentActivity}`)
    console.log(`the current activityID is: ${activityId}`)
    function handleInputChange(){

    }
    function handleSubmit(){

    }
    return (
        <div className="page-content">
            <h1>Edit Activity Page</h1>
            <form >
            <input 
                    type="text" 
                    placeholder="Enter Activity Name"
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
                <input type="date" placeholder="Date" name="date"/><br/>
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
                <button type="submit" onSubmit={handleSubmit}>Update Activity</button>
                <button type="" >Delete Activity</button>
            </form>
        </div>
    );
}
// export default function EditActivityPage() {
//     const navigate = useNavigate();
//     const { activityId } = useParams();
//     const [activity, setActivity] = useState(null);
//     console.log(`activity in edit page: ${activity}`)
//     useEffect(() => {
//         const getActivityDetails = async () => {
//             try {
//                 const response = await fetch(`/myactivity/${activityId}`)
//                 const data = await response.json();
//                 setActivity(data);
//             } catch (err) {
//                 console.log('Error getting activity details', err);
//             }
//         };
//         getActivityDetails();
//     }, [activityId])

//     function handleInputChange (evt) {
//         setActivity((oldActivity) => ({...oldActivity,[evt.target.name]:evt.target.value}));
//     } 
//     async function handleSubmit (evt) {
//         evt.preventDefault();
//         try {
//             await fetch(`/myactivity/${activityId}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }, body: JSON.stringify(activity)
//             });
//             await updateUserState();
//             navigate('/myactivity')
//         } catch (err) {
//             console.log('Error submitting new activity details', err);
//         }
//     }
//     return (
//         <div className="page-content">
//             <h1>Edit Activity Page</h1>
//             <form >
//             <input 
//                     type="text" 
//                     placeholder="Enter Activity Name"
//                     name="name"
//                     value={activity.name}
//                     onChange={handleInputChange}
//                     /><br/>
//                 <label htmlFor="">Activity Type
//                     <select 
//                         name="activityType"
//                         value={activity.activityType}
//                         onChange={handleInputChange}
//                         >
//                         <option value="Run">Run</option>
//                         <option value="Hike">Hike</option>
//                         <option value="Yoga">Yoga</option>
//                         <option value="Walk">Walk</option>
//                         <option value="Weights">Weights</option>
//                         <option value="Meditation">Meditation</option>
//                     </select>
//                 </label>
//                 <input type="date" placeholder="Date" name="date"/><br/>
//                 <label htmlFor="">Indoor/Outdoor
//                     <select 
//                         name="inOut"
//                         value={activity.inOut}
//                         onChange={handleInputChange}>
//                         <option value="Indoor">Indoor</option>
//                         <option value="Outdoor">Outdoor</option>
//                     </select>
//                 </label>
//                 <label htmlFor="">Duration
//                     <select 
//                     name="duration"
//                     value={activity.duration}
//                     onChange={handleInputChange}
//                     >
//                         <option value="0-30mins">0-30mins</option>
//                         <option value="30mins-1hr">30mins-1hr</option>
//                         <option value="1hr-2hr">1hr-2hr</option>
//                         <option value="2hr+">2hr+</option>
//                     </select>
//                 </label>
//                 <label htmlFor="">Rating
//                     <select 
//                     name="rating"
//                     value={activity.rating}
//                     onChange={handleInputChange}
//                     >
//                         <option value="1">★</option>
//                         <option value="2">★★</option>
//                         <option value="3">★★★</option>
//                         <option value="4">★★★★</option>
//                         <option value="5">★★★★★</option>
//                     </select>
//                 </label>
//                 <input 
//                 type="text"
//                 name="details"
//                 placeholder="Description"
//                 value={activity.description}
//                 onChange={handleInputChange}
//                 /><br/>
//                 <button type="submit" onSubmit={handleSubmit}>Update Activity</button>
//                 <button type="" >Delete Activity</button>
//             </form>
//         </div>
//     );
// }