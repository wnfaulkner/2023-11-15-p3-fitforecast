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
  //console.log(user)

  //Define activities & weather criteria for each (if desire CRUD functionality later, will need to refactor to be a model with router & controller) 
  const activityList = [
    {name: 'Skiing & Snowboarding', maxTemp: 32, minTemp: 0, maxPrecip: 12, minPrecip: 0, recommendation: 'Enjoy the freezing temperatures and sunny weather and hit the slopes!'},
    {name: 'Indoor Ice Skating', maxTemp: 32, minTemp: -100, maxPrecip: 100, minPrecip: 1, recommendation: 'Head to an indoor ice skating rink and enjoy gliding on the ice. The cold, sunny atmosphere will make for a refreshing and enjoyable skating session.'},
    {name: 'Running', maxTemp: 85, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: 'Take advantage of the sunny weather a go for a job in a nearby park or trail. Don\'t forget to stay hydrated!'},
    {name: 'Dance', maxTemp: 200, minTemp: 50, maxPrecip: 12, minPrecip: 1, recommendation: 'Embrace the rain and have fun. Put on some lively music and dance in your backyard or at a covered outdoor space'},
    {name: 'Water Biking', maxTemp: 200, minTemp: 85, maxPrecip: 24, minPrecip: 3, recommendation: 'Take advantage of the flash flood puddles and grab your bike. Speed through for laughs and a work-out!'},
  ]
  //console.log(activityList)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/weather/fetch-weather-data?location=${user.location}`);
        //console.log(response.data)
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
  ///}, []);
  }, [user]);
  
  //console.log(weatherData.current.condition.text)

  return (
    <main className="App">
    { user ?
      <>
        <TopNavBar user={ user } setUser={ setUser } />
        <Routes >
          <Route path="/home" element={ <HomePage weatherData={ weatherData } activityList={ activityList } /> } />
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
