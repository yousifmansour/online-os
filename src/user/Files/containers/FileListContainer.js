import React from 'react';
import {connect} from 'react-redux';

import {navigateToFolder, deleteFileOrFolder} from 'actions/files';

import FolderComponent from 'user/Files/components/FolderComponent';
import FileComponent from 'user/Files/components/FileComponent';

import './FileListContainer.css';

class FileListContainer extends React.Component {
    render() {
        let filesAndFolders = this
            .props
            .data
            .sort((a, b) => new Date(a.birthtime) - new Date(b.birthtime))
            .map(file => {
                if (file.isDirectory) 
                    return (<FolderComponent
                        deleteFolder={() => this.props.deleteFileOrFolder(this.props.currentPath, file)}
                        key={file.birthtime + Math.random()}
                        path={this.props.currentPath}
                        addToPath={this.props.addToPath}
                        folder={file}
                        navigateToFolder={() => this.props.navigateToFolder(this.props.currentPath, file.name)}/>);
                else 
                    return (<FileComponent
                        deleteFile={() => this.props.deleteFileOrFolder(this.props.currentPath, file)}
                        key={file.birthtime + Math.random()}
                        path={this.props.currentPath}
                        file={file}/>);
                }
            )
        return (
            <div className='file-list-container'>
                {filesAndFolders}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.files;
}

export default connect(mapStateToProps, {navigateToFolder, deleteFileOrFolder})(FileListContainer);