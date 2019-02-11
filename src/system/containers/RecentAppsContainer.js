import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {closeApp} from '../../actions/recentApps';
import RecentApps from '../components/RecentApps';

const RecentAppsContainer = (props) => {
    // sets up recent apps from redux state
    const recentApps = props
        .recentApps
        .map((app, i) => (
            <div key={i}>
                <NavLink exact to={'/' + app} activeClassName="active">
                    <h2>
                        {app}
                    </h2>
                </NavLink>
                <button onClick={() => props.closeApp(app)}>X</button>
            </div>
        ));
    return (<RecentApps recentApps={recentApps}/>);
}

function mapStateToProps(state) {
    return {recentApps: state.recentApps};
}

export default connect(mapStateToProps, {closeApp})(RecentAppsContainer);