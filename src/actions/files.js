import {
    FINISHED_UPLOAD,
    LOAD_FILES_FOLDERS_DATA,
    NAVIGATE_BACK,
    NAVIGATE_TO_FOLDER,
    STARTED_UPLOAD,
    UPLOAD_PROGRESS
} from 'actions/types';
import axios from 'axios';

export function deleteFileOrFolder(path, fileOrFolder) {
    return dispatch => {
        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';
        axios.delete(url + '/files/delete', {
            data: {
                path: path.join('/') + '/' + fileOrFolder.name
            }
        }).then((response) => {
            console.log(response);
            dispatch(loadFilesFoldersData(path));
        }).catch(err => alert(err));
    }
}

export function navigateToFolder(path, folder) {
    return (dispatch) => {
        dispatch({type: NAVIGATE_TO_FOLDER, payload: folder});
        dispatch(loadFilesFoldersData([
            ...path,
            folder
        ]));
    }
}

export function navigateBack(path) {
    return dispatch => {
        dispatch({type: NAVIGATE_BACK});
        dispatch(loadFilesFoldersData(path));
    }
}

export function loadFilesFoldersData(path) {
    return (dispatch) => {
        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';
        axios
            .get(url + '/files/?directory=' + path.join('/'))
            .then((response) => {
                dispatch({type: LOAD_FILES_FOLDERS_DATA, payload: response.data});
            });
    }
}

export function upload(path, file) {
    return dispatch => {
        dispatch({type: STARTED_UPLOAD});

        const data = new FormData()
        data.append('file', file, file.name);

        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';
        let uploadPath = url + '/files/upload?path=' + path.join('/');

        axios
            .post(uploadPath, data, {
            onUploadProgress: ProgressEvent => dispatch({
                type: UPLOAD_PROGRESS,
                payload: (ProgressEvent.loaded / ProgressEvent.total * 100)
            })

        })
            .then(res => {
                console.log(res.statusText);
                dispatch({type: FINISHED_UPLOAD});
                dispatch(loadFilesFoldersData(path));
            });
    }
}