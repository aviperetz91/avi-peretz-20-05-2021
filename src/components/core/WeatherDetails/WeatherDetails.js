import './WeatherDetails.css'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather, getForecast, toggleFavorite } from '../../../store/actions/mainActions';
import { TEL_AVIV_ID } from '../../../constants/consts';
import CurrentWeather from '../WeatherDetails/CurrentWeather/CurrentWeather';
import FiveDaysForecast from './FiveDaysForecast/FiveDaysForecast';

const WeatherDetails = () => {

    const { 
        selectedLocation, 
        currentWeather, 
        forecast, 
        favorites, 
        theme 
    } = useSelector(state => state.main);
    
    const { Headline, DailyForecasts } = forecast;

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentWeather.length === 0 && Object.keys(forecast).length === 0) {
            dispatch(getCurrentWeather(TEL_AVIV_ID))
            dispatch(getForecast(TEL_AVIV_ID))        
        }
    }, [])

    const styles = {
        'dark': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            boxShadow: '0px 3px 15px 5px #000000'
        },
        'light': {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            boxShadow: '0px 3px 15px 5px #d7d7d7'
        }
    }

    const requiredBool = Object.keys(forecast).length !== 0 && currentWeather.length > 0;

    if (requiredBool) {
        return (
            <div className="row justify-content-center mt-5">
                <div className="forecast col-11 text-center p-3" style={styles[theme]}>
                    <CurrentWeather 
                        currentWeather={currentWeather} 
                        selectedLocation={selectedLocation} 
                        favorites={favorites}
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