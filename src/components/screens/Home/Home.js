import React from 'react';
import SearchBox from '../../core/SearchBox/SearchBox';

const Home = props => {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-6">
                <SearchBox />
            </div>
        </div>
    )
}

export default Home;