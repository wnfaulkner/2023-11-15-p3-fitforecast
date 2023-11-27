import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserState } from "../../utilities/users-service";

export default function AddActivityPage({ user, setUser }) {
    console.log(`User data is: ${user}`)
    const navigate = useNavigate();
    const [newActivity, setNewActivity] = useState({
        name: '',
        activityType: '',
        inOut: '',
        rating: '',
        details: '',
        duration: '',
        user: user,
        date: ''
    });
    const handleInputChange = (evt) => {
        setNewActivity({...newActivity, [evt.target.name]: evt.target.value})
    };
    async function handleSubmit (evt) {
        evt.preventDefault();
        console.log(`here is newActivity: ${newActivity}`)
        try {
            await fetch('/addactivity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(newActivity)
            });
            await updateUserState();
            navigate('/myactivity')
        }catch (error) {
            console.error('Form Submission Error', error)
        }
    }
    return (
        <div className="page-content">
            <form onSubmit={handleSubmit}>
                <h1>Add Activity Page</h1>
                <input 
                    type="text" 
                    placeholder="Enter Activity Name"
                    name="name"
                    // value={newActivity.name}
                    onChange={handleInputChange}
                    /><br/>
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
                <input type="date" placeholder="Date"/><br/>
                <label htmlFor="">Indoor/Outdoor
                    <select 
                        name="inOut"
                        // value={newActivity.inOut}
                        onChange={handleInputChange}>
                        <option value="Indoor">Indoor</option>
                        <option value="Outdoor">Outdoor</option>
                    </select>
                </label>
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
                <input 
                type="text"
                name="details"
                placeholder="Description"
                // value={newActivity.description}
                onChange={handleInputChange}
                /><br/>
                <button type="submit">Save Activity</button>
            </form>
        </div>
    );
}