import {ADD_APP, CLOSE_APP} from 'actions/types';

// consider chaning names to ids?
export function addApp(appName) {
    return {type: ADD_APP, payload: appName};
}

export function closeApp(appName) {
    return {type: CLOSE_APP, payload: appName};
}