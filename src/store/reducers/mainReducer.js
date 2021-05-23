import { GET_LOCATIONS, GET_FORECAST, SELECT_LOCATION } from '../actions/mainActions';

const telAviv = [
    {
        Version: 1,
        Key: "215854",
        Type: "City",
        Rank: 31,
        LocalizedName: "Tel Aviv",
        Country: {
            ID: "IL",
            LocalizedName: "Israel",
        },
        AdministrativeArea: {
            ID: "TA",
            LocalizedName: "Tel Aviv",
        },
    },
]

const initialState = {
    locations: [],
    selectedLocation: [],
    defaultLocation: telAviv,
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
