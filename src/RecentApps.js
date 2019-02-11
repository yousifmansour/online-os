import React from 'react';
import './RecentApps.css'
// import NavBar from './NavBar';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {closeApp} from './actions/recentApps';

class RecentApps extends React.Component {
    render() {
        // consider turning this to functionional component
        const recentApps = this
            .props
            .recentApps
            .map((app, i) => (
                <div key={i} className='running-app'>
                    <NavLink exact to={'/' + app} activeClassName="active">
                        <h2>
                            {app}
                        </h2>
                    </NavLink>
                    <button onClick={() => this.props.closeApp(app)}>X</button>
                </div>
            ));

        // make to a presentaional component
        return (
            <div className='recent-apps-contaienr'>
                <div className='links'>
                    {recentApps}
                </div>
            </div>

        );
    };
}

function mapStateToProps(state) {
    return {recentApps: state.recentApps};
}

export default connect(mapStateToProps, {closeApp})(RecentApps);