import React from 'react';
import { useDispatch } from 'react-redux';
import weatherIcons from '../../../../constants/weatherIcons';
import { IoHeartOutline as HeartOutlineIcon, IoHeartSharp as HeartIcon } from "react-icons/io5";
import { toggleFavorite } from '../../../../store/actions/mainActions';
import { TEL_AVIV, IL } from '../../../../constants/consts';
import moment from 'moment';

const CurrentWeather = props => {

    const { currentWeather, selectedLocation, favorites, theme } = props;

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

    const isFavorite = favorites.some(fav => selectedLocation.length > 0 && fav.id === selectedLocation[0].Key);

    const currentDate = moment(currentWeather[0].LocalObservationDateTime).format('LLLL')

    const textColor = {
        'dark': 'white',
        'white': 'black'
    }

    return (
        <div style={{ color: textColor[theme]}}>
            <div className="d-flex align-items-center">
                <div className="pointer text-left" onClick={handleHeartToggle}>
                    {isFavorite ? <HeartIcon style={{ fontSize: 30, color: 'red' }} />
                        : <HeartOutlineIcon style={{ fontSize: 30, color: 'red' }} />}
                </div>
                <div onClick={handleHeartToggle} className="ml-3 pointer">
                    {isFavorite ? 'Remove from Favorites' : 'Add To Favorites'}
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="text-left">
                    {selectedLocation.length > 0 ? 
                        <h1 className="m-0 display-4">{`${selectedLocation[0].LocalizedName}, ${selectedLocation[0].Country.ID}`}</h1>
                    :
                        <h1 className="m-0 display-4">{`${TEL_AVIV}, ${IL}`}</h1> 
                    }
                    <h4 className="font-weight-light">{currentDate}</h4>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <img src={weatherIcons[currentWeather[0].WeatherIcon]} width="220px" />
                    </div>
                    <div className="p-2">
                        <div className="d-flex display-2 font-weight-lighter">
                            <div className="">{`${currentWeather[0].Temperature.Imperial.Value}`} </div>
                            <div>&#x2109;</div>
                        </div>
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