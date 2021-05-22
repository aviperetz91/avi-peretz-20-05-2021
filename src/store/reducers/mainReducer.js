import { GET_LOCATIONS, GET_FORECAST } from '../actions/mainActions';

const initialState = {
    locations: [],
    forecast: {},
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            }
        case GET_FORECAST:
            return {
                ...state,
                forecast: action.forecast
            }
        default:
            return state
    }
}

export default mainReducer;
