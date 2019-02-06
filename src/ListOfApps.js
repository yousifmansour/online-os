import React from 'react';
import './ListOfApps.css';

import {NavLink} from 'react-router-dom';

class ListOfApps extends React.Component {
    render() {
        return (
            <div className='list-container'>
                <div className='time-and-date'>
                    <h1>02:31 PM</h1>
                    <h2>WED, FEB 04</h2>
                </div>
                <div className='links'>
                    <NavLink exact to="/calculator" activeClassName="active">
                        Calculator
                    </NavLink>

                    <NavLink exact to="/notes" activeClassName="active">
                        Notes
                    </NavLink>

                    <NavLink exact to="/diary" activeClassName="active">
                        Diary
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default ListOfApps;