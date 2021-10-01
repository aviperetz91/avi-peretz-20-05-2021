import './Header.css';
import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setPath, setTheme, setUnit } from '../../../store/actions/mainActions';
import { Link } from 'react-router-dom';
import {
    DARK_VALUE,
    LIGHT_VALUE,
    CELSIUS_VALUE,
    FAHRENHEIT_VALUE,
    HOME_PATH,
    FAVORITES_PATH,
} from '../../../constants/consts';

const Header = () => {
    const { path, theme, unit } = useSelector((state) => state.main);

    const dispatch = useDispatch();

    const handlePathChange = (path) => {
        dispatch(setPath(path));
    };

    const handleThemeChange = (theme) => {
        dispatch(setTheme(theme));
    };

    const handleUnitChange = (unit) => {
        dispatch(setUnit(unit));
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-dark'>
            <a className='navbar-brand'>Worldwide Weather</a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link
                            to='/'
                            className={classnames('nav-link', {
                                active: path === HOME_PATH,
                            })}
                            onClick={() => handlePathChange(HOME_PATH)}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/favorites'
                            className={classnames('nav-link', {
                                active: path === FAVORITES_PATH,
                            })}
                            onClick={() => handlePathChange(FAVORITES_PATH)}
                        >
                            Favorites
                        </Link>
                    </li>
                    <li className='nav-item dropdown'>
                        <a
                            className='nav-link dropdown-toggle'
                            id='navbarDropdown'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                        >
                            Units
                        </a>
                        <div
                            className='dropdown-menu custom-dropdown-menu'
                            aria-labelledby='navbarDropdown'
                        >
                            <a
                                className={classnames(
                                    'dropdown-item custom-dropdown-item',
                                    { active: unit === FAHRENHEIT_VALUE }
                                )}
                                onClick={() =>
                                    handleUnitChange(FAHRENHEIT_VALUE)
                                }
                            >
                                Fahrenheit
                            </a>
                            <a
                                className={classnames(
                                    'dropdown-item custom-dropdown-item',
                                    { active: unit === CELSIUS_VALUE }
                                )}
                                onClick={() => handleUnitChange(CELSIUS_VALUE)}
                            >
                                Celsius
                            </a>
                        </div>
                    </li>
                    <li className='nav-item dropdown'>
                        <a
                            className='nav-link dropdown-toggle'
                            id='navbarDropdown'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                        >
                            Theme
                        </a>
                        <div
                            className='dropdown-menu custom-dropdown-menu'
                            aria-labelledby='navbarDropdown'
                        >
                            <a
                                className={classnames(
                                    'dropdown-item custom-dropdown-item',
                                    { active: theme === DARK_VALUE }
                                )}
                                onClick={() => handleThemeChange(DARK_VALUE)}
                            >
                                Dark
                            </a>
                            <a
                                className={classnames(
                                    'dropdown-item custom-dropdown-item',
                                    { active: theme === LIGHT_VALUE }
                                )}
                                onClick={() => handleThemeChange(LIGHT_VALUE)}
                            >
                                Light
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
