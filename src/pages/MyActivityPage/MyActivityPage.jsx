import React, { useEffect } from 'react';
import MyLoggedItems from '../MyLoggedItems/MyLoggedItems';
import { getUser } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function MyActivityPage({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      // Fetch the latest user data
      const updatedUser = getUser();
      // Update the state with the latest user data
      setUser(updatedUser);
      console.log('Updated user in MyActivityPage:', updatedUser);
    };

    fetchUser();
  }, [navigate]); // This effect will run whenever the navigation changes

  const activitiesLogged = user.activitiesLogged;
  const loggedActivity = activitiesLogged.map((activity, idx) => (
    <MyLoggedItems activity={activity} key={idx} />
  ));

  return (
    <div className="page-content">
      <h1>My Activity Page</h1>
      {loggedActivity && <ul>{loggedActivity}</ul>}
    </div>
  );
}