import React from 'react';
import moment from 'moment';
import weatherIcons from '../../../constants/weatherIcons';
import { useDispatch } from 'react-redux';
import { setPath, selectLocation, getCurrentWeather, getForecast } from '../../../store/actions/mainActions';

const WeatherBox = props => {

    const { forecast, favorite, history } = props;
    const dispatch = useDispatch();

    const handleFavoriteClick = () => {
        dispatch(selectLocation([{ Key: favorite.id, LocalizedName: favorite.name, Country: favorite.Country }]))
        dispatch(getCurrentWeather(favorite.id));
        dispatch(getForecast(favorite.id));
        dispatch(setPath("/"))
        history.push("/")
    }

    if (forecast) {
        const fullDate = new Date(forecast.Date);
        const dayString = moment(fullDate).format('dddd');
        return (
            <div className="border p-2">
                <h5>{dayString}</h5>
                <div>{`${forecast.Temperature.Maximum.Value} / ${forecast.Temperature.Minimum.Value}`}</div>
                <img src={weatherIcons[forecast.Day.Icon]} width="100px" />
                <div>{forecast.Day.IconPhrase}</div>
            </div>
        )
    } else if (favorite) {
        return (
            <div className="border p-2" style={{ cursor: 'pointer' }} onClick={handleFavoriteClick}>
                <h5>{favorite.name}</h5>
                <div>{`${favorite.currentWeather[0].Temperature.Imperial.Value} ${favorite.currentWeather[0].Temperature.Imperial.Unit}`}</div>
                <img src={weatherIcons[favorite.currentWeather[0].WeatherIcon]} width="120px" />
                <div>{favorite.currentWeather[0].WeatherText}</div>
            </div>
        )
    }
}

export default WeatherBox;