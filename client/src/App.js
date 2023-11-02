import { Route, Routes } from "react-router-dom";
import './App.css';
import Auth from './components/authorization-section/Auth';
import MainHeader from './components/header-section/MainHeader';
import MainIndex from './components/main-section/MainIndex';

import NavigationBar from './components/navigation-section/NavigationBar';
import React, { useState, useEffect } from 'react';
import RoomPage from "./components/main-section/RoomPage";


function App() {


  const [token, setToken] = useState("");

  function updateToken(newToken) {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div>
      <MainHeader/>
      <NavigationBar/>
      
      <Routes>
        <Route path="/auth" element={<Auth updateToken={updateToken} />} />
        <Route path="/feed" element={<MainIndex token={token} />} />
        <Route path="/feed/:id" element={<RoomPage token={token}/>} />
        

      </Routes>
      
      
      
      {/* {token ? <MainIndex token={token} /> : <Auth updateToken={updateToken} />} */}
    </div>
  );
}

export default App;