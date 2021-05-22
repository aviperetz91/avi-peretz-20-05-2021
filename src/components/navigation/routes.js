import React from 'react';
import { Route } from "react-router-dom";
import Home from '../screens/Home/Home';
import Favorites from '../screens/Favorites/Favorites';

const Routes = () => {
    return (
        <div className="App">
            <Route path='/' exact component={Home}></Route>
            <Route path='/favorites' exact component={Favorites}></Route>
        </div>
    )
}

export default Routes;