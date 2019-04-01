import React from 'react';
import {withRouter} from "react-router";
import axios from 'axios';
import FileDownload from 'js-file-download';
import {ContextMenu, MenuItem, ContextMenuTrigger} from "react-contextmenu";
import {connect} from 'react-redux';
import {setPDFPath} from 'actions/PDFViewer';
import {setMediaPath} from 'actions/MediaPlayer';

import './FileComponent.css';

class FileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: props.file.name,
            tempFileName: props.file.name,
            renaming: false,
            contextMenuShown: false
        }
    }

    // calls action
    handleRename = () => {
        let newName = this.state.tempFileName;
        this.setState({fileName: newName, renaming: false});
        // update the server to tell it about new name (or through redux)
    }

    // redirect to app
    openFile = () => {
        let path = this.props.path;
        let file = this.props.file;

        let fileExtension = file
            .name
            .split('.')
            .pop();

        switch (fileExtension) {
            case 'pdf':
                if (!this.state.renaming && !this.state.contextMenuShown) {
                    // create action to set file path
                    this
                        .props
                        .setPDFPath(path.join('/') + '/' + file.name)
                    this
                        .props
                        .history
                        .push('/pdf-viewer/');
                }
                break;
            case 'mp4':
                this
                    .props
                    .setMediaPath(path.join('/') + '/' + file.name);
                this
                    .props
                    .history
                    .push('/media-player/');
                break;
            default:
                alert('no app to open file with extenstion ' + fileExtension);
                break;
        }
    }

    downloadFile = () => {
        let path = this.props.path;
        let file = this.props.file;

        let url = 'http://localhost:5000';
        // let url = 'https://www.yousifmansour.space/api/online-os';

        axios.get(url + '/files/download', {
            params: {
                path: path.join('/') + '/' + file.name
            }
        }).then((response) => {
            FileDownload(response.data, file.name);
        }).catch(err => alert(err));
    }

    render() {
        let fileNameField;
        if (this.state.renaming) {
            fileNameField = <input
                autoFocus
                onBlur={() => this.handleRename()}
                value={this.state.tempFileName}
                onChange=
                {(e)=> this.setState({tempFileName: e.target.value})}></input>;
        } else 
            fileNameField = <div>{this.state.fileName}</div>;
        
        // split into container and componenet

        let icon;

        switch (this.props.file.name.split('.').pop()) {
            case 'pdf':
                icon = (
                    <i className="fas fa-2x fa-file-pdf"></i>
                );
                break;
            case 'mp4':
                icon = (
                    <i className="fas fa-2x fa-file-video"></i>
                );
                break;
            default:
                icon = (
                    <i className='far fa-2x fa-file'></i>
                );
                break;
        }

        return (
            <div className='file-component' onClick={() => this.openFile()}>
                <ContextMenuTrigger
                    id={this
                    .props
                    .path
                    .join('/') + '/' + this.props.file.name}>

                    {icon}
                </ContextMenuTrigger>

                {fileNameField}

                <ContextMenu
                    onShow={() => this.setState({contextMenuShown: true})}
                    onHide={() => this.setState({contextMenuShown: false})}
                    className='context-menu'
                    id={this
                    .props
                    .path
                    .join('/') + '/' + this.props.file.name}>
                    <MenuItem onClick={() => this.setState({renaming: true})}>
                        <div className='context-menu-item'>
                            Rename file
                        </div>
                    </MenuItem>

                    <MenuItem onClick={() => this.downloadFile()}>
                        <div className='context-menu-item'>
                            Download file
                        </div>
                    </MenuItem>

                    <MenuItem onClick={() => this.props.deleteFile()}>
                        <div
                            className='context-menu-item'
                            style={{
                            color: 'red'
                        }}>
                            Delete file
                        </div>
                    </MenuItem>
                </ContextMenu>
            </div>
        );
    }
}

export default withRouter(connect(null, {setPDFPath, setMediaPath})(FileComponent));