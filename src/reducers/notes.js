import {
    SET_NOTE,
    CREATE_NOTE,
    LOAD_NOTES_FROM_DB,
    CLOSE_APP,
    SET_STATE,
    DELETE_NOTE_FROM_DB,
    SET_SELECTED_NOTEID,
    RESET_SELECTED_NOTE

} from 'actions/types';

const initialState = {
    appName: 'notes',
    notes: null,
    selectedNoteID: null,
    nextID: null
};

export default function notes(state = initialState, action) {
    switch (action.type) {
        case SET_NOTE:
            /* this will create new note if this was not an update action */
            /* and will update if a note with the same id exists */
            return {
                ...state,
                notes: [
                    ...state
                        .notes
                        .filter((note) => note.id !== action.payload.id),
                    action.payload
                ]
            };

        case CREATE_NOTE:
            let newNote = {
                text: '',
                id: state.nextID
            };
            let nextID = state.nextID + 1;
            let notes = [];
            if (state.notes) 
                notes = state.notes;
            notes.push(newNote);
            return {
                ...state,
                notes,
                nextID
            };

        case LOAD_NOTES_FROM_DB:
            return {
                ...state,
                notes: action.payload.notes,
                nextID: action.payload.nextID
            }

        case SET_SELECTED_NOTEID:
            if (state.notes.filter(note => note.id === action.payload).length === 1) 
                return {
                    ...state,
                    selectedNoteID: action.payload
                }
            else 
                return state;
            
        case RESET_SELECTED_NOTE:
            return {
                ...state,
                selectedNoteID: null
            }

        case DELETE_NOTE_FROM_DB:
            let selectedNoteID = state.selectedNoteID;
            if (action.payload === state.selectedNoteID) 
                selectedNoteID = null;
            
            return {
                ...state,
                selectedNoteID,
                notes: state
                    .notes
                    .filter((note) => note.id !== action.payload)
            }

        case CLOSE_APP:
            if (state.appName === action.payload) 
                return initialState;
            else 
                return state;
            
        case SET_STATE:
            return action.payload.notes;

        default:
            return state;
    }
};