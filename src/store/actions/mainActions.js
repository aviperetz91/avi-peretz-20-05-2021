import axios from 'axios';
import { BASE_URL, API_KEY } from '../../config';
import tempLocations from '../../temp-data/locations';
import tempForecast from '../../temp-data/forecast';
import tempCurrentWeather from '../../temp-data/currentWeather';

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const SELECT_LOCATION = 'SELECT_LOCATION';
export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const GET_FORECAST = 'GET_FORECAST';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';


export const getLocations = (value) => {
    return async dispatch => {
        // const locationsResponse = await axios.get(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`)
        // const locations = locationsResponse && locationsResponse.data ? locationsResponse.data : [];
        // dispatch({ type: GET_LOCATIONS, locations })
        dispatch({ type: GET_LOCATIONS, locations: tempLocations })
    }
}

export const selectLocation = (location) => {
    return { type: SELECT_LOCATION, location }
}

export const getCurrentWeather = (locationId) => {
    return async dispatch => {
        // const currentWeatherResponse = await axios.get(`${BASE_URL}/currentconditions/v1/${locationId}?apikey=${API_KEY}`)
        // const currentWeather = currentWeatherResponse && currentWeatherResponse.data ? currentWeatherResponse.data : {}; 
        // dispatch({ type: GET_CURRENT_WEATHER, currentWeather })
        dispatch({ type: GET_CURRENT_WEATHER, currentWeather: tempCurrentWeather })
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

export const toggleFavorite = (location) => {
    return { type: TOGGLE_FAVORITE, location }
}