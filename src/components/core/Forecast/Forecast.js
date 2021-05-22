import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast } from '../../../store/actions/mainActions';
import weatherIconsDictionary from '../../../constants/weatherIconsDictionary'

const telAvivId = 215854; // Temp

const Forecast = () => {

    const { forecast } = useSelector(state => state.main);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getForecast(telAvivId))
    }, [])

    console.log("forecast", forecast);
    // console.log(weatherIconsDictionary[forecast.DailyForecasts[0].Day.Icon])

    return (
        <div>Forecast Component</div>
    )
}

export default Forecast;