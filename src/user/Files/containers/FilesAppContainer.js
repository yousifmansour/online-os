import React from 'react';
import {connect} from 'react-redux';

import * as filesActions from 'actions/files';
import {addApp} from 'actions/recentApps';

class FilesAppContainer extends React.Component {
    componentDidMount() {
        this
            .props
            .addApp(this.props.appName);

        this
            .props
            .loadFilesFoldersData(this.props.currentPath);
    }

    render() {
        let data = this
            .props
            .data
            .map(file => {
                if (file.isDirectory) {
                    return (
                        <div
                            onClick={() => this.props.navigateToFolder(this.props.currentPath, file.name)}
                            key={file.birthtime}>
                            {file.name}
                        </div>
                    );
                }
                // else return (<div key={file.birthtime}>{file.name}</div>);

            });
        console.log(this.props.currentPath);
        let currentPath = this
            .props
            .currentPath
            .join('/');
        return (
            <div>
                <h2>
                    hello, i am files app
                </h2>
                <h3>current path: {currentPath}</h3>
                <button onClick={() => this.props.navigateBack(this.props.currentPath)}>go back</button>
                {data}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.files;
}

export default connect(mapStateToProps, {
    addApp,
    ...filesActions
})(FilesAppContainer);