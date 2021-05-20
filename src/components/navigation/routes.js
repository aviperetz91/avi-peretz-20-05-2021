import React from 'react';
import { Route } from "react-router-dom";
import Home from '../screens/Home/Home';

const Routes = () => {
    return (
        <div className="App">
            <Route path='/' exact component={Home}></Route>
        </div>
    )
}

export default Routes;