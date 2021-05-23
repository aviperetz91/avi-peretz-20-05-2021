import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast } from '../../../store/actions/mainActions';
import { IoHeartOutline as HeartOutlineIcon, IoHeartSharp as HeartIcon } from "react-icons/io5";
import DailyForecast from './DailyForecast/DailyForecast';
import { TEL_AVIV_ID, TEL_AVIV } from '../../../constants/consts';

const Forecast = () => {

    const { selectedLocation, forecast } = useSelector(state => state.main);
    const { Headline, DailyForecasts } = forecast;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getForecast(TEL_AVIV_ID))
    }, [])

    const requiredBool = Object.keys(forecast).length !== 0;

    if (requiredBool) {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-11 border text-center p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3>{ selectedLocation.length > 0 ? selectedLocation[0].LocalizedName : TEL_AVIV }</h3>
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
        return null;
    }
}

export default Forecast;