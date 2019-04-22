import React from 'react';

import './FilesNavbarComponent.css';

const FilesNavbarComponent = ({currentPath, navigateBack, handleUpload}) => {
    let path = '/home';
    if (currentPath.length >= 1) 
        path += ' / ' + currentPath.join(' / ');
    return (
        <div className='files-navbar-component'>

            <div className='back-button' onClick={navigateBack}>
                <i className="fas fa-arrow-left"></i>
            </div>

            <div className='upload-button'>
                <label htmlFor='upload-files'>
                    <span>
                        <i className="fas fa-cloud-upload-alt"></i>
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
                    {path}
                </h3>
            </div>
        </div>
    )
};

export default FilesNavbarComponent;