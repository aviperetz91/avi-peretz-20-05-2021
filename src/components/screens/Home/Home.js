import React from 'react';
import SearchBox from '../../core/SearchBox/SearchBox';
import Forecast from '../../core/Forecast/Forecast';

const Home = props => {
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-11 col-md-6 col-xl-5">
                    <SearchBox />
                </div>
            </div>
            <div>
                <Forecast />
            </div>
        </div>
    )
}

export default Home;