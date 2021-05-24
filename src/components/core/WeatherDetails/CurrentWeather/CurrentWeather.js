import React from 'react';
import { useDispatch } from 'react-redux';
import { weatherIcons } from '../../../../helpers/helpers';
import { IoHeartOutline as HeartOutlineIcon, IoHeartSharp as HeartIcon } from "react-icons/io5";
import { toggleFavorite } from '../../../../store/actions/mainActions';
import { TEL_AVIV, IL } from '../../../../constants/consts';
import { fahrenheitToCelsius } from '../../../../helpers/helpers';
import moment from 'moment';

const CurrentWeather = props => {

    const { currentWeather, selectedLocation, favorites, theme, unit } = props;
    const isFavorite = favorites.some(fav => selectedLocation.length > 0 && fav.id === selectedLocation[0].Key);
    const currentDate = moment(currentWeather[0].LocalObservationDateTime).format('LLLL')

    const dispatch = useDispatch();

    const handleHeartToggle = () => {
        const place = {
            id: selectedLocation[0].Key,
            name: selectedLocation[0].LocalizedName,
            Country: selectedLocation[0].Country,
            currentWeather: currentWeather
        }

        dispatch(toggleFavorite(place))
    }

    const renderHeartIcon = () => {
        let heartIcon = <HeartOutlineIcon style={{ fontSize: 30, color: 'red' }} />
        if (isFavorite) {
            heartIcon = <HeartIcon style={{ fontSize: 30, color: 'red' }} />
        }
        return heartIcon;
    }

    const renderLocation = () => {
        let location = <h1 className="m-0 display-4">{`${TEL_AVIV}, ${IL}`}</h1>;
        if (selectedLocation.length > 0) {
            location = <h1 className="m-0 display-4">{`${selectedLocation[0].LocalizedName}, ${selectedLocation[0].Country.ID}`}</h1>;
        }
        return location
    }

    const renderTemperature = () => {
        let temperature = (
            <div className="d-flex align-items-center">
                <div className="display-2">{`${currentWeather[0].Temperature.Imperial.Value}`} </div>
                <div className="display-4 font-weight-light">&#x2109;</div>
            </div>
        )
        if (unit === 'C') {
            temperature = (
                <div className="d-flex align-items-center">
                    <div className="display-2">{`${fahrenheitToCelsius(currentWeather[0].Temperature.Imperial.Value)}`} </div>
                    <div className="display-4">&#x2103;</div>
                </div>
            )
        }
        return temperature;
    }

    const textColor = {
        'dark': 'white',
        'white': 'black'
    }

    return (
        <div style={{ color: textColor[theme] }}>
            <div className="d-flex align-items-center">
                <div className="pointer text-left" onClick={handleHeartToggle}>
                    {renderHeartIcon()}
                </div>
                <div onClick={handleHeartToggle} className="ml-3 pointer">
                    {isFavorite ? 'Remove from Favorites' : 'Add To Favorites'}
                </div>
            </div>
            <div className="row align-items-center">
                <div className="text-center text-lg-left col-12 col-lg-6">
                    {renderLocation()}
                    <h4 className="font-weight-light">{currentDate}</h4>
                </div>
                <div className="d-flex align-items-center col-12 col-lg-6 justify-content-end">
                    <div>
                        <img src={weatherIcons[currentWeather[0].WeatherIcon]} width="220px" />
                    </div>
                    <div className="p-2">
                        {renderTemperature()}
                    </div>
                </div>
            </div>
            <div>
                <div className="display-4">
                    {currentWeather[0].WeatherText}
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;