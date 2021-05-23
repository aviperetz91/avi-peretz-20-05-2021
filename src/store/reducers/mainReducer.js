import {
    GET_LOCATIONS,
    SELECT_LOCATION,
    GET_CURRENT_WEATHER,
    GET_FORECAST,
    TOGGLE_FAVORITE,
    SET_PATH,
} from '../actions/mainActions';
import defaultLocation from '../../temp-data/defaultLocation';

const initialState = {
    locations: [],
    selectedLocation: defaultLocation,
    currentWeather: [],
    forecast: {},
    favorites: [],
    path: window.location.pathname
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
        case TOGGLE_FAVORITE:
            const updatedFavorites = toggleFavorite(state.favorites, action.location)
            return {
                ...state,
                favorites: updatedFavorites,
            }
        case SET_PATH:
            return {
                ...state,
                path: action.path,
            }
        default:
            return state
    }
}

const toggleFavorite = (favorites, newLocation) => {
    const isFavorite = favorites.some(fav => fav.id === newLocation.id);
    let updatedFavorites = [];
    if (isFavorite) {
        updatedFavorites = favorites.filter(fav => fav.id !== newLocation.id)
    } else {
        updatedFavorites = [...favorites, newLocation];
    }
    return updatedFavorites;
}

export default mainReducer;
