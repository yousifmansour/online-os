import React from 'react';
import './RecentAppsBar.css';
import {NavLink} from 'react-router-dom';

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
                    <NavLink exact to="/recent" activeClassName="active">
                        Reecent Apps
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default RecentAppsBar;