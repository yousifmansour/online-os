import {SET_IMAGE_PATH} from './types';

export function setImagePath(path) {
    return {type: SET_IMAGE_PATH, payload: path}
}