// ADD ACTIVITY LOG PAGE

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserState } from "../../utilities/users-service";

import moment from "moment";

import './AddActivityLog.css'

export default function AddActivityLogPage({ user, activityList, recommendedActivity }) {
  // console.log(recommendedActivity)
  const navigate = useNavigate();
  const [newLog, setNewLog] = useState({
    name: '',
    activityType: recommendedActivity.name,
    indoorOutdoor: recommendedActivity.indoorOutdoor,
    rating: '',
    details: '',
    duration: '',
    user: user,
    date: moment().format('YYYY-MM-DD')
  });

  const handleInputChange = (evt) => {
    setNewLog({...newLog,[evt.target.name]: evt.target.value});
  };

  async function handleSubmit (evt) {
    evt.preventDefault();
    // console.log(newLog)
    try {
      await fetch('/create-activity-log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(newLog)
      });
      await updateUserState();
      navigate('/myactivitylogs')
    }catch (error) {
      console.error('Form Submission Error', error)
    }
  }

  return (
    <div className="page-content">
      <h1>Log an Activity</h1>
      <form id="new-activity-log-form" onSubmit={handleSubmit}>
        <input 
          id="log-title-input"
          type="text" 
          placeholder="Title"
          name="name"
          onChange={handleInputChange}
        />
        <input
          id="log-date-input"
          type="date"
          placeholder="Date"
          value={newLog.date}
          onChange={handleInputChange}
          name="date"
        />
        <div className="label-input-pairs">
          <label htmlFor="" className="label-input-pair">Activity Type:
            <select 
              name="activityType"
              onChange={handleInputChange}
              value={newLog.activityType}
            >
            {activityList.map((activity) => (
              <option key={activity.name} value={activity.name}>
                {activity.name}
              </option>
            ))}
            </select>
          </label>
          <label htmlFor="" className="label-input-pair">Indoor/Outdoor:
            <select 
              name="indoorOutdoor"
              onChange={handleInputChange}
              value={newLog.indoorOutdoor}
            >
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
            </select>
          </label>
          <label htmlFor="" className="label-input-pair">Duration:
            <select 
              name="duration"
              onChange={handleInputChange}
            >
              <option value="0-30mins">0-30mins</option>
              <option value="30mins-1hr">30mins-1hr</option>
              <option value="1hr-2hr">1hr-2hr</option>
              <option value="2hr+">2hr+</option>
            </select>
          </label>
          <label htmlFor="" className="label-input-pair">Rating:
            <select 
              name="rating"
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
        <textarea
          id="description-textarea" 
          rows="10"
          cols="50"
          name="details"
          placeholder="Description"
          // value={newLog.description}
          onChange={handleInputChange}
        />
        <button type="submit">Save Activity</button>
      </form>
    </div>
  );
}