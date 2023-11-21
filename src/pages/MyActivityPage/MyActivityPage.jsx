import React, { useEffect } from 'react';
import MyLoggedItems from '../MyLoggedItems/MyLoggedItems';
import { getUser } from '../../utilities/users-service';
import { useNavigate } from "react-router-dom";

export default function MyActivityPage({ user, setUser }) {
    const navigate = useNavigate();
  useEffect(() => {
    // You can log the user state here to check if it reflects the updated state
    setUser(getUser());
    console.log('User in MyActivityPage:', user);
  }, [navigate]); // This effect will run whenever the user state changes

  const activitiesLogged = user.activitiesLogged;
  const loggedActivity = activitiesLogged.map((activity, idx) => (
    <MyLoggedItems activity={activity} key={idx} />
  ));

  // Pass handleUpdateUser as a prop to child components where you need to update user state
  return (
    <div className="page-content">
      <h1>My Activity Page</h1>
      <ul>{loggedActivity}</ul>
    </div>
  );
}