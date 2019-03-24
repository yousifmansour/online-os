import React from 'react';

import {ContextMenu, MenuItem, ContextMenuTrigger} from "react-contextmenu";

import './FolderComponent.css';

class FolderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folderName: this.props.folder.name,
            tempFolderName: this.props.folder.name,
            renaming: false
        }
    }

    // calls action
    handleRename = () => {
        let newName = this.state.tempFolderName;

        if (newName.length === 0) {
            alert('not cool');
            this.setState({renaming: false});
        } else 
            this.setState({
                folderName: newName
            }, () => this.setState({renaming: false}));
        }

    render() {
        let folderNameField;
        if (this.state.renaming) {
            folderNameField = <input
                autoFocus
                onBlur={() => this.handleRename()}
                value={this.state.tempFolderName}
                onChange=
                {(e)=> this.setState({tempFolderName: e.target.value})}></input>;
        } else 
            folderNameField = <div>{this
                    .state
                    .folderName
                    .substring(0, 15)}</div>;
        
        return (
            <div className='folder-component'>
                <div onClick={this.props.navigateToFolder}>
                    <ContextMenuTrigger
                        id={this
                        .props
                        .path
                        .join('/') + '/' + this.props.folder.name}>

                        <i className="far fa-2x fa-folder"></i>

                        {folderNameField}
                    </ContextMenuTrigger>
                </div>

                <ContextMenu
                    className='context-menu'
                    id={this
                    .props
                    .path
                    .join('/') + '/' + this.props.folder.name}>
                    <MenuItem onClick={() => this.setState({renaming: true})}>
                        <div className='context-menu-item'>
                            Rename folder
                        </div>
                    </MenuItem>

                    <MenuItem onClick={this.props.addToPath}>
                        <div className='context-menu-item'>
                            Open folder
                        </div>
                    </MenuItem>

                    <MenuItem onClick={() => this.props.deleteFolder()}>
                        <div
                            className='context-menu-item'
                            style={{
                            color: 'red'
                        }}>
                            Delete folder
                        </div>
                    </MenuItem>
                </ContextMenu>
            </div>
        );
    }
}

export default FolderComponent;