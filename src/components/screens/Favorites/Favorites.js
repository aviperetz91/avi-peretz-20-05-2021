import React from 'react';
import { useSelector } from 'react-redux';
import WeatherBox from '../../core/WeatherBox/WeatherBox';

const Favorites = props => {

    const { favorites, theme } = useSelector(state => state.main);

    const styles = {
        'dark': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            boxShadow: '0px 3px 15px 5px #000000',
            color: 'white',
        },
        'light': {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            boxShadow: '0px 3px 15px 5px #d7d7d7',
            color: 'black'
        }
    }

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
            <div className="card m-5 p-5 row justify-content-center mt-5 text-center" style={styles[theme]}>
                <h2>You have no favorites yet</h2>
            </div>
        )
    }
}

export default Favorites;