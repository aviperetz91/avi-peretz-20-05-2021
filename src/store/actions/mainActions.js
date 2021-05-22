import axios from 'axios';
import { BASE_URL, API_KEY } from '../../config';
import tempLocations from '../../temp/locations';
import tempForecast from '../../temp/forecast';

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_FORECAST = 'GET_FORECAST';

export const getLocations = (value) => {
    return async dispatch => {
        // const locationsResponse = await axios.get(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`)
        // const locations = locationsResponse && locationsResponse.data ? locationsResponse.data : [];
        // dispatch({ type: GET_LOCATIONS, locations })
        dispatch({ type: GET_LOCATIONS, locations: tempLocations })
    }
}

export const getForecast = (locationId) => {
    return async dispatch => {
        // const forecastResponse = await axios.get(`${BASE_URL}/forecasts/v1/daily/5day/${locationId}?apikey=${API_KEY}`)
        // const forecast = forecastResponse && forecastResponse.data ? forecastResponse.data : {}; 
        // dispatch({ type: GET_FORECAST, forecast })
        dispatch({ type: GET_FORECAST, forecast: tempForecast })
    }
}