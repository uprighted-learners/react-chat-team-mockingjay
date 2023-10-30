import './App.css';
import Auth from './components/authorization-section/Auth';
import MainHeader from './components/header-section/MainHeader';
import NavigationBar from './components/navigation-section/NavigationBar';
import React, { useState, useEffect } from 'react';


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
      <Auth updateToken={updateToken} />
    </div>
  );
}

export default App;
