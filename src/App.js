import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Routes from './components/navigation/routes';
import Header from './components/core/Header/Header';
import DarkBackground from './assets/images/dark-background.jpeg';
import lightBackground from './assets/images/light-background.jpeg';

const App = () => {

  const { theme } = useSelector(state => state.main);

  const background = {
    'dark': DarkBackground,
    'light': lightBackground
  }
    
  return (
    <div className="App" style={{ backgroundImage: `url(${background[theme]})` }}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
