// APP

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser, getToken } from '../../utilities/users-service';
import { getActivityList } from '../../components/ActivityList/ActivityList'

import React from 'react';
import axios from 'axios';

import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import TopNavBarDesktop from '../../components/TopNavBarDesktop/TopNavBarDesktop';

import AuthPage from '../AuthPage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import HomePage from '../HomePage/HomePage';
import CommunityDashboardPage from '../CommunityDashboardPage/CommunityDashboardPage';
import LogActivityPage from '../AddActivityLogPage/AddActivityLogPage';
import MyActivityLogsPage from '../MyActivityLogsPage/MyActivityLogsPage';
import EditActivityLogPage from '../EditActivityLogPage/EditActivityLogPage';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [weatherData, setWeatherData] = useState(null);
  const [recommendedActivity, setRecommendedActivity] = useState('Loading Recommended Activity...');
  const [showBigTopNavBar, setShowBigTopNavBar] = useState(false);
  const [showSmallTopNavBar, setShowSmallTopNavBar] = useState(true);

  const sessionToken = getToken()
  const activityList = getActivityList()

  useEffect(() => {
    // console.log(sessionToken)
    // console.log('The TopNavBar component was rendered from the useEffect');
    async function fetchWeatherData() {
      try {
        const response = await axios.get(`/api/weather/fetch-weather-data?location=${user.location}`);
        setWeatherData(response.data);
        return response.data; // Return the weather data
      } catch (error) {
        console.error('Error fetching data from the server:', error);
        throw error; // Re-throw the error to be caught in the next .catch block
      }
    }
    
    function getRecommendedActivity(weatherData) {
      //console.log(weatherData.forecast)
      const todayForecast = weatherData.forecast.forecastday[0].day
      const todayAvgTemp = todayForecast.avgtemp_f
      const todayTotalPrecip = todayForecast.totalprecip_in
	
      // Filtering activities based on weather and temp criteria
      const filteredActivities = activityList.filter(activity => {
        return (
          todayAvgTemp >= activity.minTemp &&
          todayAvgTemp <= activity.maxTemp &&
          todayTotalPrecip >= activity.minPrecip &&
          todayTotalPrecip <= activity.maxPrecip
        );
      });
      // console.log(filteredActivities)

      // Selecting final recommended activity 
      if (filteredActivities.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredActivities.length);
        //console.log(randomIndex, filteredActivities)
        return {name: filteredActivities[randomIndex].name, recommendation: filteredActivities[randomIndex].recommendation};
      } else {
        return {name: "No suitable activities found.", recommendation: 'Pack your bindle and catch the next freight train outta Dodge. Nothin\' doin\' here.'};
      };
    }

    if (user) {
      // console.log(user)
      // User is logged in, fetch the weather data
      fetchWeatherData()
      .then((weatherData) => {   // With weather data now in hand, select the recommended activity (this is done at the App level because when using react-router-dom, every time you navigate to a new route, the App re-mounts all of its route components, so any useEffect inside the components gets re-run)
        const updatedActivity = getRecommendedActivity(weatherData) 
        setRecommendedActivity(updatedActivity);
      })
      .catch((error) => {
        console.error('Error updating recommended activity:', error);
      });
    }
  }, [sessionToken]);

  return (
    <main className="App">
      { user ?
        <>
          {window.innerWidth < 768 ? (
            <TopNavBar user={user} setUser={setUser} />
          ) : (
            <TopNavBarDesktop user={user} setUser={setUser} />
          )}
          <Routes >
            <Route path="/home" element={ <HomePage user={ user } weatherData={ weatherData } recommendedActivity={ recommendedActivity } /> } />
            <Route path="/communitydashboard" element={ <CommunityDashboardPage user={user} weatherData={ weatherData } /> } />
            <Route path="/addactivitylog" element={ <LogActivityPage user={ user } setUser={ setUser } /> } />
            <Route path="/myactivitylogs" element={ <MyActivityLogsPage user={ user } setUser={ setUser } /> } />
            <Route path="/myactivitylogs/edit/:activityId" element={ <EditActivityLogPage user={ user } setUser={ setUser } /> } />
            <Route path="/profile" element={ <ProfilePage user={ user } setUser={ setUser } /> } />
            <Route path="/profile/edit/" element={ <EditProfilePage user={ user } setUser={ setUser } /> } />
          </Routes>
          {window.innerWidth < 768 && <BottomNavBar user={ user } setUser={ setUser } />}
        </>
        :
        <AuthPage setUser={ setUser } />
      }
    </main>
  );
}
