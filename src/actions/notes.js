import {SET_NOTE, CREATE_NOTE, LOAD_NOTES_FROM_DB, DELETE_NOTE_FROM_DB, SET_SELECTED_NOTEID} from 'actions/types';

export function setNote(note) {
    return {type: SET_NOTE, payload: note};
}

export function createNote() {
    return {type: CREATE_NOTE};
}

export function deleteNote(noteID) {
    return {type: DELETE_NOTE_FROM_DB, payload: noteID};
}

export function setSelectedNoteID(noteID) {
    return {type: SET_SELECTED_NOTEID, payload: noteID};
}

export function loadNotesFromDB() {
    // this needs to load notes (if any) and nextID and populate the state
    return (dispatch) => {
        // let url = 'http://localhost:5000';
        let url = 'https://www.yousifmansour.space/api/online-os';
        fetch(url + '/notes').then((data) => {
            return data.json();
        }).then((data) => {
            dispatch({
                type: LOAD_NOTES_FROM_DB,
                payload: {
                    notes: data.notes,
                    nextID: data.nextID
                }
            });
        });
    };
}