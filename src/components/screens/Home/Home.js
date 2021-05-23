import React from 'react';
import SearchBox from '../../core/SearchBox/SearchBox';
import Forecast from '../../core/Forecast/Forecast';

const Home = () => {
    return (
        <div>
            <SearchBox />
            <Forecast />
        </div>
    )
}

export default Home;