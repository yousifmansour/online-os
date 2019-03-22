import React from 'react';

const FilesNavbarContainer = ({handleUpload}) => (
    <div>
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
);

export default FilesNavbarContainer;