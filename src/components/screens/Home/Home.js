import React from 'react';
import SearchBox from '../../core/SearchBox/SearchBox';
import WeatherDetails from '../../core/WeatherDetails/WeatherDetails';

const Home = () => {
    return (
        <div>
            <SearchBox />
            <WeatherDetails />
        </div>
    )
}

export default Home;