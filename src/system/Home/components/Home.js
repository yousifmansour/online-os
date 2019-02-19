import React from 'react';
import {NavLink} from 'react-router-dom';
import TimeAndDate from 'system/TimeAndDate/components/TimeAndDate';
import 'system/Home/components/Home.css';

const Home = (props) => (
    <div className='list-container'>
        <TimeAndDate/>
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