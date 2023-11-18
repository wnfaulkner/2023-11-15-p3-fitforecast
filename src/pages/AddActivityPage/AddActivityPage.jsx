export default function AddActivityPage() {
    return (
        <div className="page-content">
            <h1>Add Activity Page</h1>
            <input type="text" placeholder="Enter Activity Name"/><br/>
            <label htmlFor="">Activity Type
                <select name="activitytype" id="">
                    <option value="">Run</option>
                    <option value="">Yoga</option>
                    <option value="">Hike</option>
                    <option value="">Swim</option>
                </select>
            </label>
            <input type="date" placeholder="Date"/><br/>
            <label htmlFor="">Indoor/Outdoor
                <select name="activitytype" id="">
                    <option value="">Indoor</option>
                    <option value="">Outdoor</option>
                </select>
            </label>
            <label htmlFor="">Duration
                <select name="activitytype" id="">
                    <option value="">0-30mins</option>
                    <option value="">30mins-1hr</option>
                    <option value="">1hr-2hr</option>
                    <option value="">2hr+</option>
                </select>
            </label>
            <label htmlFor="">Rating
                <select name="activitytype" id="">
                    <option value="">★</option>
                    <option value="">★★</option>
                    <option value="">★★★</option>
                    <option value="">★★★★</option>
                    <option value="">★★★★★</option>
                </select>
            </label>
            <input type="text" placeholder="Description"/><br/>
            <button>Save Activity</button>
        </div>
    );
}