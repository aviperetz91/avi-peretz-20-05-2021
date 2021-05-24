import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import SearchBox from '../../core/SearchBox/SearchBox';
import WeatherDetails from '../../core/WeatherDetails/WeatherDetails';

const Home = () => {

    const { error } = useSelector(state => state.main);

    return (
        <Fragment>
            <SearchBox />
            <WeatherDetails />
            {error && <div className="row justify-content-center">
                <div class="mt-5 col-5 alert alert-danger text-center" role="alert">
                    Somthing went wrong, please try again in few minutes
                </div>
            </div>}
        </Fragment>
    )
}

export default Home;