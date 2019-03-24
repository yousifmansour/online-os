import React from 'react';
import Dropzone from 'react-dropzone';

import FilesNavbarComponent from 'user/Files/components/FilesNavbarComponent';
import FileListContainer from 'user/Files/containers/FileListContainer'

import './FilesAppComponent.css';

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
            <div className='files-app-component'>
                <Dropzone
                    onDrop={this.onDrop}
                    onDragEnter={this.onDragEnter}
                    onDragLeave={this.onDragLeave}>
                    {({getRootProps, getInputProps}) => (
                        <div
                            className={this.state.draggingFile
                            ? ['dragging-file', 'dropzone'].join(' ')
                            : 'dropzone'}
                            {...getRootProps()}>
                            <h1 className='title'>Files</h1>

                            <FilesNavbarComponent
                                currentPath={this.props.currentPath}
                                navigateBack={() => this.props.navigateBack()}
                                handleUpload={this.onDrop}/>

                            <FileListContainer/>
                        </div>
                    )}
                </Dropzone>
            </div>
        );
    };
}

export default FilesAppComponent;
