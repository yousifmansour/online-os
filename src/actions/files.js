import {LOAD_FILES_FOLDERS_DATA, NAVIGATE_TO_FOLDER, NAVIGATE_BACK} from 'actions/types';
import axios from 'axios';

export function navigateToFolder(path, folder) {
    return (dispatch) => {
        dispatch({type: NAVIGATE_TO_FOLDER, payload: folder});
        console.log([
            ...path,
            folder
        ]);
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