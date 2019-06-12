import React from 'react';
import {connect} from 'react-redux';
import {setBackgroundImageIndex, loadBackgrounds} from 'actions/settings';
import SettingsAppComponent from 'system/Settings/components/SettingsAppComponent';
import {addApp} from 'actions/recentApps';

class SettingsAppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this
            .props
            .addApp(this.props.appName);

        if (this.props.backgrounds.length === 0) 
            this.props.loadBackgrounds();
        }
    
    handleBackgroundToggle = (index) => {
        this
            .props
            .setBackgroundImageIndex(index);
    }

    render() {

        return (<SettingsAppComponent
            handleBackgroundToggle={this.handleBackgroundToggle}
            {...this.props}/>);
    }
}

export default connect((state) => state.settings, {setBackgroundImageIndex, loadBackgrounds, addApp})(SettingsAppContainer);
