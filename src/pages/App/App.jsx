// APP

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import React from 'react';
import axios from 'axios';
import AuthPage from '../AuthPage/AuthPage';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import AddActivityPage from '../AddActivityPage/AddActivityPage';
import MyActivityPage from '../MyActivityPage/MyActivityPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [weatherData, setWeatherData] = useState(null);
  console.log(user)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/weather/fetch-weather-data?location=${user.location}`);
        console.log(response.data)
        setWeatherData(response.data);
        
      } catch (error) {
        console.error('Error fetching data from the server:', error);
      }
    }

    if (user) {
      // User is logged in, fetch the weather data
      fetchData();
      //console.log(weatherData)
    }
  // }, []);
  }, [user]);
  
  return (
    <main className="App">
    { user ?
      <>
        <TopNavBar user={ user } setUser={ setUser } />
        <Routes >
          <Route path="/home" element={ <HomePage /> } />
          <Route path="/communitydashboard" element={ <DashboardPage weatherData={ weatherData }/> } />
          <Route path="/addactivity" element={ <AddActivityPage user={user} /> } />
          <Route path="/myactivity" element={ <MyActivityPage /> } />
          <Route path="/profile" element={ <ProfilePage /> } />
        </Routes>
        <BottomNavBar user={ user } setUser={ setUser } />
      </>
      :
      <AuthPage setUser={ setUser } />
    }
    </main>
  );
}
