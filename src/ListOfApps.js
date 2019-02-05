import React from 'react';
import './ListOfApps.css';

import {NavLink} from 'react-router-dom';

class ListOfApps extends React.Component {
    render() {
        return (
            <div className='list-container'>
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