import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import React from 'react';
import AuthPage from '../AuthPage/AuthPage';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import DashboardPage from '../DashboardPage/DashboardPage';
import HomePage from '../HomePage/HomePage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
    { user ?
      <>
        <TopNavBar user={ user } setUser={ setUser }/>
        <Routes>
          <Route path="/home" element={ <HomePage /> } />
          <Route path="/communitydashboard" element={ <DashboardPage /> } />
        </Routes>
        <BottomNavBar user={ user } setUser={ setUser }/>
      </>
      :
      <AuthPage setUser={ setUser } />
    }
    </main>
  );
}
