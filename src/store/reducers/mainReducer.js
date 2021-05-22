import { GET_LOCATIONS } from '../actions/mainActions';

const initialState = {
    locations: [],
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            }
        default:
            return state
    }
}

export default mainReducer;
