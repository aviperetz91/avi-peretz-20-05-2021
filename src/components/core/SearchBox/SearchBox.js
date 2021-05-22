import React, { useState } from 'react';
import './SearchBox.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import { IoSearch as SearchIcon, IoCloseOutline as CloseIcon } from "react-icons/io5";

const SearchBox = () => {

    const [selected, setSelected] = useState([]);

    const handleChange = async value => {
        console.log(value)
    }

    const handleSelect = arrVal => {
        console.log(arrVal);
        setSelected(arrVal);
    }

    const handleClear = () => {
        setSelected([]);
    }

    return (
        <div>
            <div className="input-icon-container input-search"> <SearchIcon /></div>
            {selected.length > 0 && <div className="input-icon-container input-close pointer" onClick={handleClear}><CloseIcon /></div>}
            <Typeahead
                id="typeahead"
                onChange={handleSelect}
                onInputChange={handleChange}
                labelKey={option => option.LocalizedName}
                options={dummyData}
                placeholder="Search..."
                selected={selected}
            />
        </div >
    )
}

const dummyData = [
    {
        Version: 1,
        Key: "299429",
        Type: "City",
        Rank: 25,
        LocalizedName: "Jeddah",
        Country: {
            ID: "SA",
            LocalizedName: "Saudi Arabia",
        },
        AdministrativeArea: {
            ID: "02",
            LocalizedName: "Makkah al Mukarramah",
        },
    },
    {
        Version: 1,
        Key: "213225",
        Type: "City",
        Rank: 30,
        LocalizedName: "Jerusalem",
        Country: {
            ID: "IL",
            LocalizedName: "Israel",
        },
        AdministrativeArea: {
            ID: "JM",
            LocalizedName: "Jerusalem",
        },
    },
    {
        Version: 1,
        Key: "223078",
        Type: "City",
        Rank: 31,
        LocalizedName: "Jeonju",
        Country: {
            ID: "KR",
            LocalizedName: "South Korea",
        },
        AdministrativeArea: {
            ID: "45",
            LocalizedName: "Jeollabuk-do",
        },
    },
    {
        Version: 1,
        Key: "224209",
        Type: "City",
        Rank: 31,
        LocalizedName: "Jeju",
        Country: {
            ID: "KR",
            LocalizedName: "South Korea",
        },
        AdministrativeArea: {
            ID: "49",
            LocalizedName: "Jeju-do",
        },
    },
    {
        Version: 1,
        Key: "203179",
        Type: "City",
        Rank: 35,
        LocalizedName: "Jember",
        Country: {
            ID: "ID",
            LocalizedName: "Indonesia",
        },
        AdministrativeArea: {
            ID: "JI",
            LocalizedName: "East Java",
        },
    },
    {
        Version: 1,
        Key: "306735",
        Type: "City",
        Rank: 42,
        LocalizedName: "Jerez de la Frontera",
        Country: {
            ID: "ES",
            LocalizedName: "Spain",
        },
        AdministrativeArea: {
            ID: "AN",
            LocalizedName: "Andalusia",
        },
    },
    {
        Version: 1,
        Key: "223116",
        Type: "City",
        Rank: 42,
        LocalizedName: "Jecheon",
        Country: {
            ID: "KR",
            LocalizedName: "South Korea",
        },
        AdministrativeArea: {
            ID: "43",
            LocalizedName: "Chungcheongbuk-do",
        },
    },
    {
        Version: 1,
        Key: "223080",
        Type: "City",
        Rank: 42,
        LocalizedName: "Jeongeup",
        Country: {
            ID: "KR",
            LocalizedName: "South Korea",
        },
        AdministrativeArea: {
            ID: "45",
            LocalizedName: "Jeollabuk-do",
        },
    },
    {
        Version: 1,
        Key: "171709",
        Type: "City",
        Rank: 43,
        LocalizedName: "Jena",
        Country: {
            ID: "DE",
            LocalizedName: "Germany",
        },
        AdministrativeArea: {
            ID: "TH",
            LocalizedName: "Thuringia",
        },
    },
    {
        Version: 1,
        Key: "3431691",
        Type: "City",
        Rank: 45,
        LocalizedName: "Jebres",
        Country: {
            ID: "ID",
            LocalizedName: "Indonesia",
        },
        AdministrativeArea: {
            ID: "JT",
            LocalizedName: "Central Java",
        },
    },
]

export default SearchBox;