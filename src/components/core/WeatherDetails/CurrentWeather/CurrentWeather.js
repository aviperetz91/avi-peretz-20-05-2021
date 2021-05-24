import React from 'react';
import { useDispatch } from 'react-redux';
import weatherIcons from '../../../../constants/weatherIcons';
import { IoHeartOutline as HeartOutlineIcon, IoHeartSharp as HeartIcon } from "react-icons/io5";
import { toggleFavorite } from '../../../../store/actions/mainActions';
import { TEL_AVIV } from '../../../../constants/consts';

const CurrentWeather = props => {

    const { currentWeather, selectedLocation, favorites } = props;

    const dispatch = useDispatch();

    const handleHeartClick = () => {
        const place = {
            id: selectedLocation[0].Key,
            name: selectedLocation[0].LocalizedName,
            currentWeather: currentWeather
        }
        dispatch(toggleFavorite(place))
    }

    const isFavorite = favorites.some(fav => selectedLocation.length > 0 && fav.id === selectedLocation[0].Key);

    return (
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
                    : <HeartOutlineIcon style={{ fontSize: 30, color: 'red' }} />}
            </div>
        </div>
    )
}

export default CurrentWeather;