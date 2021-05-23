import React from 'react';
import { useSelector } from 'react-redux';
import WeatherBox from '../../core/WeatherBox/WeatherBox';

const Favorites = props => {

    const { favorites } = useSelector(state => state.main);

    if (favorites.length > 0) {
        return (
            <div className="row justify-content-center mt-5 text-center">
                {favorites.map((fav, index) => (
                    <div key={index.toString()} className="col-10 mt-5 col-lg-2">
                        <WeatherBox favorite={fav} history={props.history}/>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <div className="row justify-content-center mt-5 text-center">
                You have no favorites yet
            </div>
        )
    }
}

export default Favorites;