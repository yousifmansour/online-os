import React from 'react';
import './RecentAppsBar.css';
import {NavLink} from 'react-router-dom';

import {withRouter} from "react-router";

class RecentAppsBar extends React.Component {
    render() {
        return (
            <div
                className='recent-bar-container'
                style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div>
                    <button onClick={() => this.props.history.goBack()}>
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
    }
}

export default withRouter(RecentAppsBar);