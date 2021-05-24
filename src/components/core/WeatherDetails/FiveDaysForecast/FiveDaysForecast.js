import React from 'react';
import WeatherBox from '../../WeatherBox/WeatherBox';

const FiveDaysForecast = props => {

    const { DailyForecasts } = props;

    return (
        <div className="row justify-content-center">
            {DailyForecasts.map((forecast, index) => (
                <div key={index.toString()} className="col-10 mt-5 col-lg-2">
                    <WeatherBox forecast={forecast} />
                </div>
            ))}
        </div>
    )
}

export default FiveDaysForecast;