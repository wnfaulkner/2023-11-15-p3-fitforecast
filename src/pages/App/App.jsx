import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import React from 'react';
import AuthPage from '../AuthPage/AuthPage';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import HomePage from '../HomePage/HomePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import AddActivityPage from '../AddActivityPage/AddActivityPage';
import MyActivityPage from '../MyActivityPage/MyActivityPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
    { user ?
      <>
        <TopNavBar user={ user } setUser={ setUser } className="top-nav"/>
        <Routes className="page-content">
          <Route path="/home" element={ <HomePage /> } />
          <Route path="/communitydashboard" element={ <DashboardPage /> } />
          <Route path="/addactivity" element={ <AddActivityPage /> } />
          <Route path="/myactivity" element={ <MyActivityPage /> } />
        </Routes>
        <BottomNavBar user={ user } setUser={ setUser } className="bottom-nav"/>
      </>
      :
      <AuthPage setUser={ setUser } />
    }
    </main>
  );
}
