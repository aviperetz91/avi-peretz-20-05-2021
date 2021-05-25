import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLocation, setError } from '../../../store/actions/mainActions';
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
        if (selectedLocation.length === 0) {
            navigator.geolocation.getCurrentPosition(onSccess, onError)
        }
    }, [])

    const onSccess = (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(getCurrentLocation(latitude, longitude))
    }

    const onError = (error) => {
        dispatch(setError(error))
    }

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
                    <FiveDaysForecast DailyForecasts={DailyForecasts} />
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default WeatherDetails;