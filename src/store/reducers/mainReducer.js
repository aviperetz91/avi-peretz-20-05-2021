import {
    GET_LOCATIONS,
    SELECT_LOCATION,
    GET_CURRENT_WEATHER,
    GET_FORECAST,
} from '../actions/mainActions';
import defaultLocation from '../../temp-data/defaultLocation';

const initialState = {
    locations: [],
    selectedLocation: defaultLocation,
    currentWeather: [],
    forecast: {},
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATIONS:
            return {
                ...state,
                locations: action.locations,
            }
        case SELECT_LOCATION:
            return {
                ...state,
                selectedLocation: action.location,
            }
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.currentWeather,
            }
        case GET_FORECAST:
            return {
                ...state,
                forecast: action.forecast,
            }
        default:
            return state
    }
}

export default mainReducer;
