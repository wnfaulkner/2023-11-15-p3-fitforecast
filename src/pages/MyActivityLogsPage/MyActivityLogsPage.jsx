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
      <h1>My Activity Log</h1>
      {loggedActivity.length ? <ul>{loggedActivity}</ul> : <h4>You haven't logged any activities yet...</h4>}
    </div>
  );
}