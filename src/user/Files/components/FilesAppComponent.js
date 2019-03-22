import React from 'react';
import Dropzone from 'react-dropzone';

import FileListContainer from 'user/Files/containers/FileListContainer';
import FilesNavbarContainer from 'user/Files/containers/FilesNavbarContainer';

class FilesAppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            draggingFile: false
        };
    }

    onDrop = (file) => {
        if (file.length !== 1) 
            alert('for now, you can only upload one file at a time');
        else {
            this.setState({
                selectedFile: file[0]
            }, () => this.props.uploadFile(this.state.selectedFile));
        }
    }

    onDragEnter = () => this.setState({draggingFile: true});
    onDragLeave = () => this.setState({draggingFile: false});

    render() {
        return (
            <Dropzone
                onDrop={this.onDrop}
                onDragEnter={this.onDragEnter}
                onDragLeave={this.onDragLeave}>
                {({getRootProps, getInputProps}) => (
                    <div
                        className={this.state.draggingFile
                        ? 'dragging-file'
                        : ''}
                        {...getRootProps()}>
                        <FilesNavbarContainer handleUpload={this.onDrop}/>
                        <FileListContainer/>
                    </div>
                )}
            </Dropzone>
        );
    };
}

export default FilesAppComponent;
