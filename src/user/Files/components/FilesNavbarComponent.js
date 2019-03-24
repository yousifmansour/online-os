import React from 'react';

import './FilesNavbarComponent.css';

const FilesNavbarComponent = ({currentPath, navigateBack, handleUpload}) => {
    return (
        <div className='files-navbar-component'>
            <div className='back-button' onClick={navigateBack}>back</div>

            <div className='upload-button'>
                <label htmlFor='upload-files'>
                    <span className='uplaod-button'>
                        Upload Files
                    </span>
                    <input
                        onChange={(e) => handleUpload(e.target.files)}
                        style={{
                        width: '0px'
                    }}
                        type='file'
                        name='upfile'
                        id='upload-files'/>
                </label>
            </div>

            <div className='current-path'>
                <h3>
                    {currentPath.join('/')}
                </h3>
            </div>

        </div>
    )
};

export default FilesNavbarComponent;