import React, { Fragment } from 'react';
import SearchBox from '../../core/SearchBox/SearchBox';
import WeatherDetails from '../../core/WeatherDetails/WeatherDetails';

const Home = () => {
    return (
        <Fragment>
            <SearchBox />
            <WeatherDetails />
        </Fragment>
    )
}

export default Home;