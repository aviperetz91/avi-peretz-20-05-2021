import './Header.css'
import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setPath, setTheme } from '../../../store/actions/mainActions';
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();

    const { path, theme } = useSelector(state => state.main);

    const handlePathChange = (path) => {
        dispatch(setPath(path))
    }

    const handleThemeChange = (theme) => {
        dispatch(setTheme(theme))
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand">Herolo Weather Task</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={classnames("nav-link", { 'active': path === '/' })}
                            onClick={() => handlePathChange("/")}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/favorites"
                            className={classnames("nav-link", { 'active': path === '/favorites' })}
                            onClick={() => handlePathChange("/favorites")}
                        >
                            Favorites
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdown">
                            <a 
                                onClick={() => handleThemeChange('dark')}
                                className={classnames("dropdown-item custom-dropdown-item", { 'active': theme === 'dark' })}
                            >
                                Dark
                            </a>
                            <a 
                                onClick={() => handleThemeChange('light')}
                                className={classnames("dropdown-item custom-dropdown-item", { 'active': theme === 'light' })}
                            >
                                Light
                            </a>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Header;