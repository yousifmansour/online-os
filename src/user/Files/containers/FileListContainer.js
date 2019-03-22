import React from 'react';
import {connect} from 'react-redux';

import FolderComponent from 'user/Files/components/FolderComponent';
import FileComponent from 'user/Files/components/FileComponent';

class FileListContainer extends React.Component {
    render() {
        let filesAndFolders = this
            .props
            .data
            .sort((a, b) => new Date(a.birthtime) - new Date(b.birthtime))
            .map((file, i) => {
                if (file.isDirectory) 
                    return (<FolderComponent
                        key={i}
                        path={this.props.currentPath}
                        folder={file}
                        navigateToFolder={() => this.props.navigateToFolder(file.name)}/>);
                else 
                    return (<FileComponent key={i} path={this.props.currentPath} file={file}/>);
                }
            )
        return (
            <div>
                {filesAndFolders}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.files;
}

export default connect(mapStateToProps)(FileListContainer);