import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather, getForecast, toggleFavorite } from '../../../store/actions/mainActions';
import { IoHeartOutline as HeartOutlineIcon, IoHeartSharp as HeartIcon } from "react-icons/io5";
import DailyForecast from './DailyForecast/DailyForecast';
import { TEL_AVIV_ID, TEL_AVIV } from '../../../constants/consts';
import weatherIcons from '../../../constants/weatherIcons';

const Forecast = () => {

    const { selectedLocation, currentWeather, forecast, favorites } = useSelector(state => state.main);
    const { Headline, DailyForecasts } = forecast;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentWeather(TEL_AVIV_ID))
        dispatch(getForecast(TEL_AVIV_ID))
    }, [])

    const handleHeartClick = () => {
        const place = {
            id: selectedLocation[0].Key,
            name: selectedLocation[0].LocalizedName,
            currentWeather: currentWeather
        }
        dispatch(toggleFavorite(place))
    }

    const requiredBool = Object.keys(forecast).length !== 0 && currentWeather.length > 0;
    const isFavorite = favorites.some(fav => fav.id === selectedLocation[0].Key);

    if (requiredBool) {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-11 border text-center p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={weatherIcons[currentWeather[0].WeatherIcon]} width="150px" />
                            <div className="text-left">
                                <h3>{selectedLocation.length > 0 ? selectedLocation[0].LocalizedName : TEL_AVIV}</h3>
                                <div className="p-2">{`${currentWeather[0].Temperature.Imperial.Value} ${currentWeather[0].Temperature.Imperial.Unit}`}</div>
                            </div>
                        </div>
                        <div className="pointer" onClick={handleHeartClick}>
                            {isFavorite ? <HeartIcon style={{ fontSize: 30, color: 'red' }} />
                            : <HeartOutlineIcon style={{ fontSize: 30, color: 'red' }} /> }
                        </div>
                    </div>
                    <h1>{Headline.Text}</h1>
                    <div className="row justify-content-center">
                        {DailyForecasts.map((forecast, index) => (
                            <div key={index.toString()} className="col-10 mt-5 col-lg-2">
                                <DailyForecast forecast={forecast} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Forecast;