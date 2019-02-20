import {SET_TOTAL, SET_NEXT, SET_OPERATION, CLOSE_APP, SET_STATE} from 'actions/types';

const initialState = {
    appName: 'calculator',
    total: null,
    next: null,
    operation: null
};

export default function calculator(state = initialState, action) {
    switch (action.type) {

        case SET_TOTAL:
            return {
                ...state,
                total: action.payload
            };

        case SET_NEXT:
            return {
                ...state,
                next: action.payload
            };

        case SET_OPERATION:
            return {
                ...state,
                operation: action.payload
            };

        case CLOSE_APP:
            if (state.appName === action.payload) 
                return initialState;
            else 
                return state;
            
        case SET_STATE:
            return action.payload.calculator;

        default:
            return state;
    }
};