import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Routes from './components/navigation/routes';
import Header from './components/core/Header/Header';
import DarkBackground from './assets/images/dark-background.jpeg';
import lightBackground from './assets/images/light-background.jpeg';
import { DARK_VALUE, LIGHT_VALUE } from './constants/consts';

const App = () => {

  const { theme } = useSelector(state => state.main);

  const getStyles = () => {
    const styles = {};
    if (theme === DARK_VALUE) {
      styles.backgroundImage = `url(${DarkBackground})`;
    } else if (theme === LIGHT_VALUE) {
      styles.backgroundImage = `url(${lightBackground})`;
    }
    return styles;
  }
    
  return (
    <div className="App" style={getStyles()}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
