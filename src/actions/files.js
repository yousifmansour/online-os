import {
    FINISHED_UPLOAD,
    LOAD_FILES_FOLDERS_DATA,
    NAVIGATE_BACK,
    NAVIGATE_TO_FOLDER,
    STARTED_UPLOAD,
    UPLOAD_PROGRESS
} from 'actions/types';
import axios from 'axios';

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
        // let url = 'https://www.yousifmansour.space/api/online-os';
        let url = 'http://localhost:8000/home?directory=';
        axios
            .get(url + path.join('/'))
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

        // let url = 'https://www.yousifmansour.space/api/online-os';
        let uploadPath = 'http://localhost:8000/upload?path=' + path.join('/');

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