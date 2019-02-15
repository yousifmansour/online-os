import {SET_FIRST_NUMBER, SET_RESULT, SET_SECOND_NUMBER, CLOSE_APP, SET_STATE} from 'actions/types';

const initialState = {
    appName: 'calculator',
    firstNumber: '',
    secondNumber: '',
    result: ''
};

export default function calculator(state = initialState, action) {
    switch (action.type) {

        case SET_FIRST_NUMBER:
            return {
                ...state,
                firstNumber: action.payload
            };

        case SET_SECOND_NUMBER:
            return {
                ...state,
                secondNumber: action.payload
            };

        case SET_RESULT:
            return {
                ...state,
                result: action.payload
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