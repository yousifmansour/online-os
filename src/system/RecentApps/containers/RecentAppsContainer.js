import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {closeApp} from 'actions/recentApps';
import RecentApps from 'system/RecentApps/components/RecentApps';
import Hammer from 'react-hammerjs';

class RecentAppsContainer extends React.Component {
    componentWillUnmount() {
        document
            .querySelector('.viewport')
            .scrollTop = 0;
    }

    render() {
        const recentApps = this
            .props
            .recentApps
            .map((app, i) => (
                <Hammer
                    key={i}
                    onSwipe={(e) => {
                    console.log(e.deltaX);
                    if (+ e.deltaX < -window.innerWidth/2 || + e.deltaX > window.innerWidth/2) 
                        this.props.closeApp(app);
                    }}>
                    <div>
                        <NavLink exact to={'/' + app} activeClassName="active">
                            <h2>
                                {app}
                            </h2>
                        </NavLink>
                        <button onClick={() => this.props.closeApp(app)}>X</button>
                    </div>
                </Hammer>
            ));
        return (<RecentApps recentApps={recentApps}/>);
    }
}

function mapStateToProps(state) {
    return {recentApps: state.recentApps};
}

export default connect(mapStateToProps, {closeApp})(RecentAppsContainer);