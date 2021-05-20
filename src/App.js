import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './components/navigation/routes';


const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
