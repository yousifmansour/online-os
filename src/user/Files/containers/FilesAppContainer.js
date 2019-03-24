import * as filesActions from 'actions/files';
import {addApp} from 'actions/recentApps';
import React from 'react';
import {connect} from 'react-redux';

import FilesAppComponent from 'user/Files/components/FilesAppComponent';

class FilesAppContainer extends React.Component {
    componentDidMount() {
        this
            .props
            .addApp(this.props.appName);

        this
            .props
            .loadFilesFoldersData(this.props.currentPath);
    }

    handleUpload = (file) => this
        .props
        .upload(this.props.currentPath, file);

    render() {
        return (<FilesAppComponent
            currentPath={this.props.currentPath}
            navigateBack={() => this.props.navigateBack(this.props.currentPath)}
            uploadFile={(file) => this.handleUpload(file)}/>);
    }
}

function mapStateToProps(state) {
    return state.files;
}

export default connect(mapStateToProps, {
    addApp,
    ...filesActions
})(FilesAppContainer);