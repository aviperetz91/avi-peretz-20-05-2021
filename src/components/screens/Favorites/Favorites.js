import React from 'react';
import { useSelector } from 'react-redux';
import WeatherBox from '../../core/WeatherBox/WeatherBox';
import { 
    DARK_VALUE,
    DARK_BACKGROUND, 
    DARK_SHADOW, 
    DARK_TEXT_COLOR,
    LIGHT_VALUE,
    LIGHT_BACKGROUND,
    LIGHT_TEXT_COLOR, 
    LIGHT_SHADOW,
} from '../../../constants/consts';

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

    const getStyles = () => {
        const styles = {}
        if (theme === DARK_VALUE) {
            styles.backgroundColor = DARK_BACKGROUND;
            styles.boxShadow = DARK_SHADOW;
            styles.color = DARK_TEXT_COLOR;
        } else if (theme === LIGHT_VALUE) {
            styles.backgroundColor = LIGHT_BACKGROUND;
            styles.boxShadow = LIGHT_SHADOW;
            styles.color = LIGHT_TEXT_COLOR;
        }
        return styles;
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
            <div className="card m-5 p-5 row justify-content-center mt-5 text-center" style={getStyles()}>
                <h2>You have no favorites yet</h2>
            </div>
        )
    }
}

export default Favorites;