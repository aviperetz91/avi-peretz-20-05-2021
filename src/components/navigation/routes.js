import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../screens/Home/Home';
import Favorites from '../screens/Favorites/Favorites';
import { HOME_PATH, FAVORITES_PATH } from '../../constants/consts';

const Routes = () => {
    return (
        <div>
            <Route path={HOME_PATH} exact component={Home}></Route>
            <Route path={FAVORITES_PATH} exact component={Favorites}></Route>
        </div>
    );
};

export default Routes;
