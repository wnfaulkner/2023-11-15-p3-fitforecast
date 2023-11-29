// MY ACTIVITY LOGS PAGE

import React, { useEffect } from 'react';
import MyActivityLogs from '../../components/MyActivityLogs/MyActivityLogs';
import { getUser } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function MyActivityLogsPage({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      // Fetch the latest user data
      const updatedUser = getUser();
      // Update the state with the latest user data
      setUser(updatedUser);
      // console.log('Updated user in MyActivityPage:', updatedUser);
    };
    fetchUser();
  }, [navigate]);

  const activitiesLogged = user.activitiesLogged ?? [];
  
  const loggedActivity = activitiesLogged.map((activity, idx) => (
    <MyActivityLogs activity={activity} key={idx} />
  ));
  //console.log(`loggedactivity: ${loggedActivity}`)
  
  return (
    <div className="page-content">
      <h1>My Activity Page</h1>
      {loggedActivity.length ? <ul>{loggedActivity}</ul> : <h4>No Activities Yet. Stop being a bum!</h4>}
    </div>
  );
}