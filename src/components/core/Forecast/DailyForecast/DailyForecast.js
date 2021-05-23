import React from 'react';
import moment from 'moment';
import weatherIcons from '../../../../constants/weatherIcons';

const DailyForecast = props => {
    
    const { forecast } = props;
    const fullDate = new Date(forecast.Date);
    const dayString = moment(fullDate).format('dddd');

    return (
        <div className="border p-2">
            <h5>{dayString}</h5>
            <div>{`${forecast.Temperature.Maximum.Value} / ${forecast.Temperature.Minimum.Value}`}</div>
            <img src={weatherIcons[forecast.Day.Icon]} width="120px" />
            <div>{forecast.Day.IconPhrase}</div>
        </div>
    )
}

export default DailyForecast;