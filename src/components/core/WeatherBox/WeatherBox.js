import './WeatherBox.css';
import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setPath, selectLocation } from '../../../store/actions/mainActions';
import { weatherIcons, fahrenheitToCelsius } from '../../../helpers/helpers';
import {
    DARK_VALUE,
    DARK_BOX_BACKGROUND,
    DARK_TEXT_COLOR,
    LIGHT_VALUE,
    LIGHT_BOX_BACKGROUND,
    LIGHT_TEXT_COLOR,
    CELSIUS_VALUE,
    DAY_FORMAY,
    HOME_PATH,
} from '../../../constants/consts';

const WeatherBox = (props) => {
    const { forecast, favorite, history } = props;
    const { theme, unit } = useSelector((state) => state.main);
    const dispatch = useDispatch();

    const handleFavoriteClick = () => {
        dispatch(
            selectLocation([
                {
                    Key: favorite.id,
                    LocalizedName: favorite.name,
                    Country: favorite.Country,
                },
            ])
        );
        dispatch(setPath(HOME_PATH));
        history.push(HOME_PATH);
    };

    const renderMinMaxTemperature = () => {
        let row = (
            <div className='temperature-row'>
                <div className='temperature-cube' style={getStyles()}>
                    <div className='temperature-text'>
                        {forecast.Temperature.Maximum.Value}
                    </div>
                    <div>&#x2109;</div>
                </div>
                <div className='temperature-cube' style={getStyles()}>
                    <div className='temperature-text'>
                        {forecast.Temperature.Minimum.Value}
                    </div>
                    <div>&#x2109;</div>
                </div>
            </div>
        );
        if (unit === CELSIUS_VALUE) {
            row = (
                <div className='temperature-row'>
                    <div className='temperature-cube' style={getStyles()}>
                        <div className='temperature-text'>
                            {fahrenheitToCelsius(
                                forecast.Temperature.Maximum.Value
                            )}
                        </div>
                        <div>&#x2103;</div>
                    </div>
                    <div className='temperature-cube' style={getStyles()}>
                        <div className='temperature-text'>
                            {fahrenheitToCelsius(
                                forecast.Temperature.Minimum.Value
                            )}
                        </div>
                        <div>&#x2103;</div>
                    </div>
                </div>
            );
        }
        return row;
    };

    const renderSingleTemperature = () => {
        let row = (
            <div className='temperature-rect m-0' style={getStyles()}>
                <div className='temperature-text'>
                    {favorite.currentWeather[0].Temperature.Imperial.Value}
                </div>
                <div>&#x2109;</div>
            </div>
        );
        if (unit === CELSIUS_VALUE) {
            row = (
                <div className='temperature-rect m-0' style={getStyles()}>
                    <div className='temperature-text'>
                        {fahrenheitToCelsius(
                            favorite.currentWeather[0].Temperature.Imperial
                                .Value
                        )}
                    </div>
                    <div>&#x2103;</div>
                </div>
            );
        }
        return row;
    };

    const getStyles = () => {
        const styles = {};
        if (theme === DARK_VALUE) {
            styles.backgroundColor = DARK_BOX_BACKGROUND;
            styles.color = DARK_TEXT_COLOR;
        } else if (theme === LIGHT_VALUE) {
            styles.backgroundColor = LIGHT_BOX_BACKGROUND;
            styles.color = LIGHT_TEXT_COLOR;
        }
        return styles;
    };

    if (forecast) {
        const fullDate = new Date(forecast.Date);
        const dayString = moment(fullDate).format(DAY_FORMAY);
        return (
            <div>
                <div className='day-text-container' style={getStyles()}>
                    <h5 className='day-text'>{dayString}</h5>
                </div>
                {renderMinMaxTemperature()}
                <div className='weather-icon-container' style={getStyles()}>
                    <img src={weatherIcons[forecast.Day.Icon]} width='120px' />
                    <div className='weather-icon-text'>
                        {forecast.Day.IconPhrase}
                    </div>
                </div>
            </div>
        );
    } else if (favorite) {
        return (
            <div className='box-container' onClick={handleFavoriteClick}>
                <div className='day-text-container m-0' style={getStyles()}>
                    <h5 className='day-text'>{favorite.name}</h5>
                </div>
                {renderSingleTemperature()}
                <div className='weather-icon-container' style={getStyles()}>
                    <img
                        src={
                            weatherIcons[favorite.currentWeather[0].WeatherIcon]
                        }
                        width='120px'
                    />
                    <div className='weather-icon-text'>
                        {favorite.currentWeather[0].WeatherText}
                    </div>
                </div>
            </div>
        );
    }
};

export default WeatherBox;
