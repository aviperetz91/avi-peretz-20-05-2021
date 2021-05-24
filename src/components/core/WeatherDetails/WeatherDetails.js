import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather, getForecast, toggleFavorite } from '../../../store/actions/mainActions';
import { TEL_AVIV_ID } from '../../../constants/consts';
import CurrentWeather from '../WeatherDetails/CurrentWeather/CurrentWeather';
import FiveDaysForecast from './FiveDaysForecast/FiveDaysForecast';
import { 
    DARK_VALUE,
    DARK_BACKGROUND, 
    DARK_SHADOW, 
    LIGHT_VALUE,
    LIGHT_BACKGROUND, 
    LIGHT_SHADOW,
} from '../../../constants/consts';

const WeatherDetails = () => {

    const { 
        selectedLocation, 
        currentWeather, 
        forecast, 
        favorites, 
        theme,
        unit, 
    } = useSelector(state => state.main);
    
    const { DailyForecasts } = forecast;

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentWeather.length === 0 && Object.keys(forecast).length === 0) {
            dispatch(getCurrentWeather(TEL_AVIV_ID))
            dispatch(getForecast(TEL_AVIV_ID))        
        }
    }, [])

    const getStyles = () => {
        const styles = {}
        if (theme === DARK_VALUE) {
            styles.backgroundColor = DARK_BACKGROUND;
            styles.boxShadow = DARK_SHADOW;
        } else if (theme === LIGHT_VALUE) {
            styles.backgroundColor = LIGHT_BACKGROUND;
            styles.boxShadow = LIGHT_SHADOW;
        }
        return styles;
    }

    const requiredBool = Object.keys(forecast).length !== 0 && currentWeather.length > 0;

    if (requiredBool) {
        return (
            <div className="row justify-content-center mt-5">
                <div className="rounded col-11 text-center p-3" style={getStyles()}>
                    <CurrentWeather 
                        currentWeather={currentWeather} 
                        selectedLocation={selectedLocation} 
                        favorites={favorites}
                        theme={theme}
                        unit={unit}
                    />
                    <FiveDaysForecast DailyForecasts={DailyForecasts}/>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default WeatherDetails;