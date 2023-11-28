// APP

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser, getToken } from '../../utilities/users-service';
import React from 'react';
import axios from 'axios';
import AuthPage from '../AuthPage/AuthPage';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import ProfilePage from '../ProfilePage/ProfilePage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import HomePage from '../HomePage/HomePage';
import CommunityDashboardPage from '../CommunityDashboardPage/CommunityDashboardPage';
import AddActivityPage from '../AddActivityPage/AddActivityPage';
import MyActivityPage from '../MyActivityPage/MyActivityPage';
import EditActivityPage from '../EditActivityPage/EditActivityPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [weatherData, setWeatherData] = useState(null);
  const [recommendedActivity, setRecommendedActivity] = useState('NO RECOMMENDED ACTIVITY YET');
  const [showBigTopNavBar, setShowBigTopNavBar] = useState(false);
  // const [showBottomNavBar, setShowBottomNavBar] = useState(false);

  //console.log(user)

  //Define activities & weather criteria for each (if desire CRUD functionality later, will need to refactor to be a model with router & controller) 
  const activityList = [
    {name: 'Yoga', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0, recommendation: 'Take advantage of the warmth indoors to calm your mind and increase your strength.'},
    {name: 'HIIT', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Keep your heart rate up with a high-intensity interval training workout including jumping jacks, burpees & mountain climbers.'},
    {name: 'Indoor Cycling', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Stay in shape indoors with a cardiovascular workout using a stationary bike or by attending a spin class.'},
    {name: 'Cross-Training Circuit', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Create an at home circuit workout with bodyweight exercises including squats, lunges, push-ups, & planks.'},
    {name: 'Indoor Dance', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Embrace the rain and have fun. Put on some lively music and dance in your backyard or at a covered outdoor space'},
    {name: 'Indoor Rock Climbing', maxTemp: 200, minTemp: 40, maxPrecip: 0.5, minPrecip: 0.02, recommendation: 'Chalk up some routes at your local indoor climbing gym or boulder lounge.'},
    {name: 'Indoor Ice Skating', maxTemp: 50, minTemp: -100, maxPrecip: 100, minPrecip: 0.02, recommendation: 'Head to an indoor ice skating rink and enjoy gliding on the ice. The cold atmosphere will make for a refreshing and enjoyable skating session.'},
    {name: 'Indoor Ice Hockey', maxTemp: 50, minTemp: -100, maxPrecip: 100, minPrecip: 0.02, recommendation: 'Head to your local frozen puddle under a roof and play ice hockey with your buddies.'},
    {name: 'Bikram Yoga', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Embrace the extreme heat with a hot yoga session. The combination of lava-like temperatures and yoga poses will enhance flexibility and relaxation.'},
    {name: 'Sauna & Cold Plunge', maxTemp: 50, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Take advantage of the cooler temps and head to the spa. The extreme changes from sauna heat to the polar plunge are great for your body.'},

    {name: 'Kayaking', maxTemp: 85, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: 'Paddle your way to a healthier future on a watercraft beloved since antiquity. Why is there a steaming horizon on the river up ahead? Get ready for some good ol\' carnage you har boater!!'},
    {name: 'Running', maxTemp: 85, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: 'Take advantage of the sunny weather a go for a job in a nearby park or trail. Don\'t forget to stay hydrated!'},
    {name: 'Outdoor Dance', maxTemp: 90, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: 'Embrace the rain and have fun. Put on some lively music and dance in your backyard or at a covered outdoor space'},
    {name: 'Outdoor Rock Climbing', maxTemp: 80, minTemp: 40, maxPrecip: 0.1, minPrecip: 0, recommendation: 'Put on your send sweater and enjoy some fresh air on the climbing wall either at your gym\'s outdoor wall or a local outdoor climbing area.'},
    {name: 'Hiking', maxTemp: 80, minTemp: 40, maxPrecip: 0.1, minPrecip: 0, recommendation: 'Science says walking makes you live longer. Why not give your future self a gift by choosing a scenic trail to enjoy some natural beauty?'},
    {name: 'Skiing & Snowboarding', maxTemp: 32, minTemp: 10, maxPrecip: 12, minPrecip: 0, recommendation: 'Enjoy the freezing temperatures and sunny weather and hit the slopes!'},
    {name: 'Outdoor Ice Skating', maxTemp: 20, minTemp: 10, maxPrecip: 0, minPrecip: 0, recommendation: 'Harness your inner Dutchperson and go gliding on your local lake or river. Always remember to check local ice conditions & thickness!'},
    {name: 'Ice Fishing', maxTemp: 25, minTemp: -100, maxPrecip: 0, minPrecip: 0, recommendation: 'The water is hard and the brews are frosty. Time to grab your drill and get to jigging! Just make sure to stay on TOP of the ice - in this sport, those attempting to fish from under the ice are called \'morons.\''},
    {name: 'Water Biking', maxTemp: 200, minTemp: 85, maxPrecip: 24, minPrecip: 2, recommendation: 'Take advantage of the flash flood puddles and grab your bike. Speed through for laughs and a work-out!'},

    {name: 'Winter Nature Walk', maxTemp: 32, minTemp: 18, maxPrecip: 1, minPrecip: 0, recommendation: 'Bundle up in warm layers and take a serene walk through a snowy landscape. The crisp winter air and snow-covered scenery provide a refreshing and peaceful experience.'},
    {name: 'Indoor Trampoline Jumping', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Have a bouncing good time at an indoor trampoline park. Jumping on trampolines is a fun and energetic way to stay active, regardless of the weather outside.'},
    {name: 'Snowshoeing Adventure', maxTemp: 32, minTemp: 10, maxPrecip: 1, minPrecip: 0, recommendation: "Explore snowy trails with a pair of snowshoes. It's a fantastic way to enjoy the winter wonderland while getting a great workout."},
    {name: 'Pilates', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: "Strengthen your core and improve flexibility with an indoor Pilates session. It's a low-impact exercise that can be tailored to various skill levels."},
    {name: 'Urban Photography Stroll', maxTemp: 85, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: "Take advantage of pleasant weather by going on a photography stroll in your city or a nearby picturesque area. Capture the beauty of your surroundings."},
    {name: 'Cooking Class', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: "Embrace the indoors by attending a cooking class. Learn new recipes, enjoy the delicious results, and indulge in some self-care"},
    {name: 'Snowman Building Challenge', maxTemp: 32, minTemp: 10, maxPrecip: 1, minPrecip: 0, recommendation: "Gather friends or family for a friendly competition of building the best snowman. It's a classic winter activity that brings joy and creativity."},
    {name: 'Indoor Mini Golf', maxTemp: 200, minTemp: 70, maxPrecip: 24, minPrecip: 0.02, recommendation: "Bring the sunshine indoors by playing mini golf with a tropical theme. It's a lighthearted and entertaining way to spend time with friends."},
    {name: 'Sledding / Toboggan', maxTemp: 32, minTemp: 10, maxPrecip: 1, minPrecip: 0, recommendation: "Find a local hill and enjoy the thrill of sledding down the slopes. It's a classic winter activity that's sure to bring laughter and excitement."},
    {name: 'Do a Puzzle', maxTemp: 85, minTemp: 50, maxPrecip: 12, minPrecip: 0.02, recommendation: "Stay cozy indoors with a puzzle. Gather friends or family for hours of friendly competition and entertainment."},
  ]
  //console.log(activityList)

  const sessionToken = getToken()

  useEffect(() => {

    console.log(sessionToken)

    async function fetchData() {
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
      fetchData()
      .then((weatherData) => {   // With weather data now in hand, select the recommended activity (this is done at the App level because when using react-router-dom, every time you navigate to a new route, the App re-mounts all of its route components, so any useEffect inside the components gets re-run)
        const updatedActivity = getRecommendedActivity(weatherData) 
        setRecommendedActivity(updatedActivity);
      })
      .catch((error) => {
        console.error('Error updating recommended activity:', error);
      });
    }
    // setShowBottomNavBar(window.innerWidth < 768);
    setShowBigTopNavBar(window.innerWidth >= 768); 
  }, [sessionToken]);

  return (
    <main className="App">
    { user ?
      <>
        <TopNavBar user={ user } setUser={ setUser } />
        <Routes >
          <Route path="/home" element={ <HomePage user={ user } weatherData={ weatherData } recommendedActivity={ recommendedActivity } /> } />
          <Route path="/communitydashboard" element={ <CommunityDashboardPage user={user} weatherData={ weatherData } /> } />
          <Route path="/addactivity" element={ <AddActivityPage user={ user } setUser={ setUser } /> } />
          <Route path="/myactivity" element={ <MyActivityPage user={ user } setUser={ setUser } /> } />
          <Route path="/profile" element={ <ProfilePage user={ user } setUser={ setUser } /> } />
          <Route path="/profile/edit/" element={ <EditProfilePage user={ user } setUser={ setUser } /> } />
          <Route path="/myactivity/edit/:activityId" element={ <EditActivityPage user={ user } setUser={ setUser } /> } />
        </Routes>
        <BottomNavBar user={ user } setUser={ setUser } />
      </>
      :
      <AuthPage setUser={ setUser } />
    }
    </main>
  );
}
