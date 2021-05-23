import { GET_LOCATIONS, GET_FORECAST, SELECT_LOCATION } from '../actions/mainActions';
import defaultLocation from '../../temp-data/defaultLocation';

const initialState = {
    locations: [],
    selectedLocation: defaultLocation,
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
