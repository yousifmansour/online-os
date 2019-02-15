import {SET_NOTE} from 'actions/types';

export function setNote(note) {
    return {type: SET_NOTE, payload: note};
}