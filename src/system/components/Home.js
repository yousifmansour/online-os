import React from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';

const Home = (props) => (
    <div className='list-container'>
        <div className='time-and-date'>
            {/* this should be the clock component */}
            <h1>08:49 AM</h1>
            <h2>THU, FEB 07</h2>
        </div>
        <div className='links'>
            <NavLink exact to="/calculator" activeClassName="active">
                Calculator
            </NavLink>

            <NavLink exact to="/notes" activeClassName="active">
                Notes
            </NavLink>

            <NavLink exact to="/diaries" activeClassName="active">
                Diaries
            </NavLink>
        </div>
    </div>
);

export default Home;