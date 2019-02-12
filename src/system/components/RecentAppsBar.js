import React from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from "react-router";

import './RecentAppsBar.css';

const RecentAppsBar = ({history}) => (
    <div className='recent-bar'>

        <button onClick={() => history.goBack()}>
            <i className="fas fa-2x fa-chevron-left"></i>
        </button>
        <NavLink exact to="/" activeClassName="active">
            <i className="far fa-circle"></i>
        </NavLink>
        <NavLink exact to="/recent" activeClassName="active">
            <i className="far fa-square"></i>
        </NavLink>

    </div>
);

export default withRouter(RecentAppsBar);