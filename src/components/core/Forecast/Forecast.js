import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast } from '../../../store/actions/mainActions';
import { IoHeartOutline as HeartOutlineIcon, IoHeartSharp as HeartIcon } from "react-icons/io5";
import DailyForecast from './DailyForecast/DailyForecast';

const telAvivId = 215854; // Temp

const Forecast = () => {

    const { defaultLocation, selectedLocation, forecast } = useSelector(state => state.main);
    const { Headline, DailyForecasts } = forecast;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getForecast(telAvivId))
    }, [])

    // console.log("Headline", Headline)
    // console.log("DailyForecasts", DailyForecasts)

    let location = defaultLocation;
    if (selectedLocation.length > 0) {
        location = selectedLocation
    }

    console.log("location", location)

    if (Object.keys(forecast).length !== 0) {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-10 border text-center p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3>{location[0].LocalizedName}</h3>
                            <div></div>
                        </div>
                        <div><HeartOutlineIcon style={{ fontSize: 30 }} /></div>
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
        return (
            <div className="spinner-border text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

export default Forecast;