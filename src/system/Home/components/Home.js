import React from 'react';
import {NavLink} from 'react-router-dom';
import TimeAndDateContainer from 'system/TimeAndDate/containers/TimeAndDateContainer';
import 'system/Home/components/Home.css';

const Home = (props) => (
    <div className='list-container'>
        <TimeAndDateContainer/>
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