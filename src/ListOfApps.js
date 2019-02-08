import React from 'react';
import './ListOfApps.css';

import {NavLink} from 'react-router-dom';

class ListOfApps extends React.Component {
    render() {
        return (
            <div className='list-container'>
                <div className='time-and-date'>
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

                    {/* <NavLink exact to="/diary" activeClassName="active">
                        Diary
                    </NavLink> */}

                    <NavLink exact to="/diaries" activeClassName="active">
                        Diaries
                    </NavLink>

                </div>
            </div>
        );
    }
}

export default ListOfApps;