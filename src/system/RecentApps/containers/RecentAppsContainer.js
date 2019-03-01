import React from 'react';
import {connect} from 'react-redux';
import {closeApp} from 'actions/recentApps';
import RecentApps from 'system/RecentApps/components/RecentApps';

class RecentAppsContainer extends React.Component {
    componentWillUnmount() {
        document
            .querySelector('.viewport')
            .scrollTop = 0;
    }

    render() {
        return (<RecentApps recentApps={this.props.recentApps} closeApp={this.props.closeApp}/>);
    }
}

function mapStateToProps(state) {
    return {recentApps: state.recentApps};
}

export default connect(mapStateToProps, {closeApp})(RecentAppsContainer);