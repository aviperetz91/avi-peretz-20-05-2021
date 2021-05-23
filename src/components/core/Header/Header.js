import React, { useState } from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setPath } from '../../../store/actions/mainActions';
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();

    const { path } = useSelector(state => state.main);

    const handlePathChange = (path) => {
        dispatch(setPath(path))
    } 

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Herolo Weather Task</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link 
                            to="/" 
                            className={classnames("nav-link", {'active': path === '/'})} 
                            onClick={() => handlePathChange("/")}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/favorites" 
                            className={classnames("nav-link", {'active': path === '/favorites'})} 
                            onClick={() => handlePathChange("/favorites")}
                        >
                            Favorites
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Header;