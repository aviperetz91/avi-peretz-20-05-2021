import React from 'react';
import classnames from 'classnames';

const Header = props => {    
    const path = window.location.pathname;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Herolo Weather Task</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-auto">
                        <li className="nav-item">
                            <a className={classnames("nav-link", {'active': path === '/'})} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={classnames("nav-link", {'active': path === '/favorites'})} href="/favorites" >Favorites</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header;