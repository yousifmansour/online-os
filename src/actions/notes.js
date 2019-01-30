import {SET_NOTE} from './types';

export function setNote(note) {
    return {type: SET_NOTE, payload: note};
}