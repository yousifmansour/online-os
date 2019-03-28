import React from 'react';

import axios from 'axios';
import FileDownload from 'js-file-download';

import {ContextMenu, MenuItem, ContextMenuTrigger} from "react-contextmenu";

import './FileComponent.css';

class FileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: props.file.name,
            tempFileName: props.file.name,
            renaming: false
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
        let fileName = file.name;
        alert('will open file in future . . .' + path.join('/') + fileExtension + '/' + fileName);
    }

    downloadFile = () => {
        let path = this.props.path;
        let file = this.props.file;

        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';

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
            fileNameField = <div>{this
                    .state
                    .fileName
                    .substring(0, 15)}</div>;
        
        // split into container and componenet
        return (
            <div className='file-component'>
                <div onClick={() => this.openFile(this.props.path, this.props.file)}>
                    <ContextMenuTrigger
                        id={this
                        .props
                        .path
                        .join('/') + '/' + this.props.file.name}>

                        <i className="far fa-2x fa-file"></i>

                        {fileNameField}
                    </ContextMenuTrigger>
                </div>

                <ContextMenu
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

export default FileComponent;