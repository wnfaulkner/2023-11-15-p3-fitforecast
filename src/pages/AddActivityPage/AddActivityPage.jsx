import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserState } from "../../utilities/users-service";
import moment from "moment";

export default function AddActivityPage({ user, setUser }) {
    // console.log(`User data is: ${user}`)
    const navigate = useNavigate();
    const [newActivity, setNewActivity] = useState({
        name: '',
        activityType: '',
        inOut: '',
        rating: '',
        details: '',
        duration: '',
        user: user,
        date: moment().format('YYYY-MM-DD')
    });
    // const handleInputChange = (evt) => {
    //     setNewActivity({...newActivity, [evt.target.name]: evt.target.value})
    // };
    const handleInputChange = (evt) => {
        // const dateStr = moment(new Date(evt.target.value)).format("YYYY-MM-DD")
        // console.log(dateStr, evt.target.value)
        setNewActivity({...newActivity,[evt.target.name]: evt.target.value});
    };
    console.log(`newactivity: ${newActivity.date}`)
    async function handleSubmit (evt) {
        evt.preventDefault();
        // console.log(`here is newActivity: ${newActivity}`)
        try {
            // const formattedDate = moment(newActivity.date).format('YYYY-MM-DD');
            // setNewActivity({...newActivity,date: formattedDate});
            await fetch('/addactivity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(newActivity)
            });
            await updateUserState();
            // console.log(`newactivity after submit: ${newActivity.date}`)
            navigate('/myactivity')
        }catch (error) {
            console.error('Form Submission Error', error)
        }
    }
    return (
        <div className="page-content">
            <h1>Add Activity Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        className="dashboard-layout" 
                        placeholder="Enter Activity Name"
                        name="name"
                        // value={newActivity.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Activity Type
                        <select 
                            name="activityType"
                            // value={newActivity.activityType}
                            onChange={handleInputChange}
                        >
                            <option value="Circuit">Circuit</option>
                            <option value="Cold Plunge">Cold Plunge</option>
                            <option value="Cross-Fit">Cross-Fit</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Dancing">Dancing</option>
                            <option value="Fishing">Fishing</option>
                            <option value="Golfing">Golfing</option>
                            <option value="HIIT">HIIT</option>
                            <option value="Hike">Hike</option>
                            <option value="Hot Tub">Hot Tub</option>
                            <option value="Ice Fishing">Ice Fishing</option>
                            <option value="Ice Hockey">Ice Hockey</option>
                            <option value="Ice Skating">Ice Skating</option>
                            <option value="Jog">Jog</option>
                            <option value="Kayaking">Kayaking</option>
                            <option value="Massage">Massage</option>
                            <option value="Meditation">Meditation</option>
                            <option value="Mini Golf">Mini Golf</option>
                            <option value="Pickleball">Pickleball</option>
                            <option value="Pilates">Pilates</option>
                            <option value="Puzzle">Puzzle</option>
                            <option value="Racketball">Racketball</option>
                            <option value="Rock Climbing">Rock Climbing</option>
                            <option value="Roller Skating">Roller Skating</option>
                            <option value="Run">Run</option>
                            <option value="Sauna">Sauna</option>
                            <option value="Skiing">Skiing</option>
                            <option value="Sledding">Sledding</option>
                            <option value="Snowboarding">Snowboarding</option>
                            <option value="Steam Room">Steam Room</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Tobbagan">Tobaggen</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Trampoline">Trampoline</option>
                            <option value="Walk" selected>Walk</option>
                            <option value="Weights">Weights</option>
                            <option value="Yardwork">Yardwork</option>
                            <option value="Yoga">Yoga</option>
                        </select>
                    </label>
                </div>
                <div className="dashboard-layout">
                    <input
                        type="date"
                        placeholder="Date"
                        // value={new Date(newActivity.date).toLocaleDateString().split('T')[0]}
                        value={newActivity.date}
                        onChange={handleInputChange}
                        name="date"
                    />
                </div>
                <div className="dashboard-layout">
                    <label htmlFor="">Indoor/Outdoor
                        <select 
                            name="inOut"
                            // value={newActivity.inOut}
                            onChange={handleInputChange}>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
                        </select>
                    </label>
                </div>
                <div className="dashboard-layout">
                    <label htmlFor="">Duration
                        <select 
                            name="duration"
                            // value={newActivity.duration}
                            onChange={handleInputChange}
                        >
                            <option value="0-30mins">0-30mins</option>
                            <option value="30mins-1hr">30mins-1hr</option>
                            <option value="1hr-2hr">1hr-2hr</option>
                            <option value="2hr+">2hr+</option>
                        </select>
                    </label>
                </div>
                <div className="dashboard-layout">
                    <label htmlFor="">Rating
                        <select 
                            name="rating"
                            // value={newActivity.rating}
                            onChange={handleInputChange}
                        >
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </select>
                    </label>
                </div>
                <div className="dashboard-layout">
                    <input 
                        type="text"
                        name="details"
                        placeholder="Description"
                        // value={newActivity.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="dashboard-layout">
                    <button type="submit">Save Activity</button>
                </div>
            </form>
        </div>
    );
}