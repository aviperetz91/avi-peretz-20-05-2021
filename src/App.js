import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './components/navigation/routes';
import Header from './components/core/Header/Header';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
