import React from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from "react-router";

import './RecentAppsBar.css';

const RecentAppsBar = ({history}) => (
    <div className='recent-bar'>
        <div>
            <button onClick={() => history.goBack()}>
                Back
            </button>
            <NavLink exact to="/" activeClassName="active">
                Home
            </NavLink>
            <NavLink exact to="/recent" activeClassName="active">
                Recent Apps
            </NavLink>
        </div>
    </div>
);

export default withRouter(RecentAppsBar);