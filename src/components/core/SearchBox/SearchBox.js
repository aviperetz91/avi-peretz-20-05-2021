import React from 'react';
import './SearchBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations, selectLocation, getForecast } from '../../../store/actions/mainActions';
import { Typeahead } from 'react-bootstrap-typeahead';
import { IoSearch as SearchIcon, IoCloseOutline as CloseIcon } from "react-icons/io5";

const SearchBox = () => {

    const { locations, selectedLocation } = useSelector(state => state.main); 
    const dispatch = useDispatch();

    const handleChange = async value => {
        dispatch(getLocations(value))
    }

    const handleSelect = location => {
        // console.log(arrVal);
        dispatch(selectLocation(location));
        dispatch(getForecast(location[0].Key));
    }

    const handleClear = () => {
        dispatch(selectLocation([]));
    }

    // console.log("locations", locations)
    // console.log("selectedLocation", selectedLocation)

    return (
        <div>
            <div className="input-icon-container input-search"> <SearchIcon /></div>
            {selectedLocation.length > 0 && <div className="input-icon-container input-close pointer" onClick={handleClear}><CloseIcon /></div>}
            <Typeahead
                id="typeahead"
                onChange={handleSelect}
                onInputChange={handleChange}
                labelKey={option => option.LocalizedName}
                options={locations}
                placeholder="Search..."
                selected={selectedLocation}
            />
        </div >
    )
}

export default SearchBox;