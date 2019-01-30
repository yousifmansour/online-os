import {SET_NOTE, CLOSE_APP, SET_STATE} from '../actions/types';

const initialState = {
    appName: 'notes',
    note: ''
};

export default function calculator(state = initialState, action) {
    switch (action.type) {

        case SET_NOTE:
            return {
                ...state,
                note: action.payload
            };

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