import {SET_MEDIA_PATH, SET_MEDIA_PLAYING, SET_MEDIA_PROGRESS, SET_MEDIA_STARTED_TIME} from './types';

export function setMediaPlaying(playing) {
    return {type: SET_MEDIA_PLAYING, payload: playing};
}

export function setMediaPath(path) {
    return {type: SET_MEDIA_PATH, payload: path};
}

export function setMediaProgress(progress) {
    return {type: SET_MEDIA_PROGRESS, payload: progress}
}

export function setMediaStartedTime(time) {
    return {type: SET_MEDIA_STARTED_TIME, payload: time};
}