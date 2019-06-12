import axios from 'axios';
import {SET_BACKGROUND_IMAGE_INDEX, SET_BACKGROUND_DATA} from './types.js'

export function setBackgroundImageIndex(index) {
    return {type: SET_BACKGROUND_IMAGE_INDEX, payload: index}
}

export function loadBackgrounds() {
    return (dispatch) => {
        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';
        axios
            .get(url + '/files/?directory=backgrounds')
            .then((response) => {
                dispatch({type: SET_BACKGROUND_DATA, payload: response.data});
            });
    }
}