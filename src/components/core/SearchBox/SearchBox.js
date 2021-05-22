import React, { useState } from 'react';
import './SearchBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../../../store/actions/mainActions';
import { Typeahead } from 'react-bootstrap-typeahead';
import { IoSearch as SearchIcon, IoCloseOutline as CloseIcon } from "react-icons/io5";

const SearchBox = () => {

    const [selected, setSelected] = useState([]);
    const { locations } = useSelector(state => state.main); 
    const dispatch = useDispatch();

    const handleChange = async value => {
        console.log(value)
        dispatch(getLocations(value))
    }

    const handleSelect = arrVal => {
        console.log(arrVal);
        setSelected(arrVal);
    }

    const handleClear = () => {
        setSelected([]);
    }

    console.log("locations", locations)

    return (
        <div>
            <div className="input-icon-container input-search"> <SearchIcon /></div>
            {selected.length > 0 && <div className="input-icon-container input-close pointer" onClick={handleClear}><CloseIcon /></div>}
            <Typeahead
                id="typeahead"
                onChange={handleSelect}
                onInputChange={handleChange}
                labelKey={option => option.LocalizedName}
                options={locations}
                placeholder="Search..."
                selected={selected}
            />
        </div >
    )
}

export default SearchBox;