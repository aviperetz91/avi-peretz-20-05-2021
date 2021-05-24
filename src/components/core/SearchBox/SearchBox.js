import './SearchBox.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations, selectLocation, getCurrentWeather, getForecast } from '../../../store/actions/mainActions';
import { Typeahead } from 'react-bootstrap-typeahead';
import { IoSearch as SearchIcon, IoCloseOutline as CloseIcon } from "react-icons/io5";

const SearchBox = () => {

    const [tempSelected, setTempSelected] = useState([]);
    const { locations } = useSelector(state => state.main);

    const dispatch = useDispatch();

    const handleChange = value => {
        dispatch(getLocations(value))
    }

    const handleSelect = location => {
        setTempSelected(location);
        dispatch(selectLocation(location));
        if (location.length > 0) {
            dispatch(getCurrentWeather(location[0].Key))
            dispatch(getForecast(location[0].Key));
        }
    }

    const handleClear = () => {
        setTempSelected([]);
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-11 col-md-6 col-xl-5">
                <div className="input-icon-container input-search"> <SearchIcon /></div>
                {tempSelected.length > 0 && <div className="input-icon-container input-close pointer" onClick={handleClear}><CloseIcon /></div>}
                <Typeahead
                    id="typeahead"
                    onChange={handleSelect}
                    onInputChange={handleChange}
                    labelKey={option => option.LocalizedName}
                    options={locations}
                    placeholder="Search..."
                    selected={tempSelected}
                />
            </div >
        </div>
    )
}

export default SearchBox;