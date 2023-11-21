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
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import HomePage from '../HomePage/HomePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import AddActivityPage from '../AddActivityPage/AddActivityPage';
import MyActivityPage from '../MyActivityPage/MyActivityPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [weatherData, setWeatherData] = useState(null);
  //console.log('User in APP :', user)
  //console.log(user)

  //Define activities & weather criteria for each (if desire CRUD functionality later, will need to refactor to be a model with router & controller) 
  const activityList = [
    {name: 'Yoga', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0, recommendation: 'Take advantage of the warmth indoors to calm your mind and increase your strength.'},
    {name: 'HIIT', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0, recommendation: 'Keep your heart rate up with a high-intensity interval training workout including jumping jacks, burpees & mountain climbers.'},
    {name: 'Indoor Cycling', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0, recommendation: 'Stay in shape indoors with a cardiovascular workout using a stationary bike or by attending a spin class.'},
    {name: 'Cross-Training Circuit', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0, recommendation: 'Create an at home circuit workout with bodyweight exercises including squats, lunges, push-ups, & planks.'},
    {name: 'Indoor Dance', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0, recommendation: 'Embrace the rain and have fun. Put on some lively music and dance in your backyard or at a covered outdoor space'},
    {name: 'Indoor Rock Climbing', maxTemp: 80, minTemp: 40, maxPrecip: 0.5, minPrecip: 0, recommendation: 'Chalk up some routes at your local indoor climbing gym or boulder lounge.'},
    {name: 'Indoor Ice Skating', maxTemp: 50, minTemp: -100, maxPrecip: 100, minPrecip: 0.0001, recommendation: 'Head to an indoor ice skating rink and enjoy gliding on the ice. The cold atmosphere will make for a refreshing and enjoyable skating session.'},
    {name: 'Indoor Ice Hockey', maxTemp: 50, minTemp: -100, maxPrecip: 100, minPrecip: 0.0001, recommendation: 'Head to your local frozen puddle under a roof and play ice hockey with your buddies.'},
    {name: 'Bikram Yoga', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0, recommendation: 'Embrace the extreme heat with a hot yoga session. The combination of lava-like temperatures and yoga poses will enhance flexibility and relaxation.'},
    {name: 'Sauna & Cold Plunge', maxTemp: 50, minTemp: -100, maxPrecip: 24, minPrecip: 0, recommendation: 'Take advantage of the cooler temps and head to the spa. The extreme changes from sauna heat to the polar plunge are great for your body.'},

    {name: 'Kayaking', maxTemp: 85, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: 'Paddle your way to a healthier future on a watercraft beloved since antiquity. Why is there a steaming horizon on the river up ahead? Get ready for some good ol\' carnage you har boater!!'},
    {name: 'Running', maxTemp: 85, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: 'Take advantage of the sunny weather a go for a job in a nearby park or trail. Don\'t forget to stay hydrated!'},
    {name: 'Outdoor Dance', maxTemp: 200, minTemp: 50, maxPrecip: 12, minPrecip: 0.0001, recommendation: 'Embrace the rain and have fun. Put on some lively music and dance in your backyard or at a covered outdoor space'},
    {name: 'Outdoor Rock Climbing', maxTemp: 80, minTemp: 40, maxPrecip: 0.5, minPrecip: 0, recommendation: 'Put on your send sweater and enjoy some fresh air on the climbing wall either at your gym\'s outdoor wall or a local outdoor climbing area.'},
    {name: 'Hiking', maxTemp: 80, minTemp: 40, maxPrecip: 1, minPrecip: 0, recommendation: 'Science says walking makes you live longer. Why not give your future self a gift by choosing a scenic trail to enjoy some natural beauty?'},
    {name: 'Skiing & Snowboarding', maxTemp: 32, minTemp: 0, maxPrecip: 12, minPrecip: 0, recommendation: 'Enjoy the freezing temperatures and sunny weather and hit the slopes!'},
    {name: 'Outdoor Ice Skating', maxTemp: 20, minTemp: -100, maxPrecip: 0, minPrecip: 0, recommendation: 'Harness your inner Dutchperson and go gliding on your local lake or river. Always remember to check local ice conditions & thickness!'},
    {name: 'Ice Fishing', maxTemp: 25, minTemp: -100, maxPrecip: 0, minPrecip: 0, recommendation: 'The water is hard and the brews are frosty. Time to grab your drill and get to jigging! Just make sure to stay on TOP of the ice - in this sport, those attempting to fish from under the ice are called \'morons.\''},
    {name: 'Water Biking', maxTemp: 200, minTemp: 85, maxPrecip: 24, minPrecip: 3, recommendation: 'Take advantage of the flash flood puddles and grab your bike. Speed through for laughs and a work-out!'},
  ]
  //console.log(activityList)



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/weather/fetch-weather-data?location=${user.location}`);
        //console.log("WEATHER DATA PULLED FROM API!")
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
  }, []);
  
  //console.log(weatherData.current.condition.text)

  return (
    <main className="App">
    { user ?
      <>
        <TopNavBar user={ user } setUser={ setUser } />
        <Routes >
          <Route path="/home" element={ <HomePage user={ user } weatherData={ weatherData } activityList={ activityList } /> } />
          <Route path="/communitydashboard" element={ <DashboardPage weatherData={ weatherData }/> } />
          <Route path="/addactivity" element={ <AddActivityPage user={ user } setUser={ setUser } /> } />
          <Route path="/myactivity" element={ <MyActivityPage user={ user } setUser={ setUser } /> } />
          <Route path="/profile" element={ <ProfilePage user={ user } setUser={ setUser } /> } />
          <Route path="/profile/edit" element={ <EditProfilePage user={ user } setUser={ setUser } /> } />
        </Routes>
        <BottomNavBar user={ user } setUser={ setUser } />
      </>
      :
      <AuthPage setUser={ setUser } />
    }
    {/* {user.activitiesLogged ? <>Has Activities</> : <>No activitiesLogged</>} */}
    </main>
  );
}
