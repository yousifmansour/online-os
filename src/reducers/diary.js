import {SET_SCROLL_POSITION, CLOSE_APP, SET_STATE, SET_CURRENT_WEEK} from '../actions/types';

const initialState = {
    appName: 'diary',
    currentWeek: '',
    scrollPosition: 0
};

export default function diary(state = initialState, action) {
    switch (action.type) {
        case SET_SCROLL_POSITION:
            return {
                ...state,
                scrollPosition: + action.payload
            };

        case SET_CURRENT_WEEK:
            return {
                ...state,
                currentWeek: action.payload
            };

        case CLOSE_APP:
            if (state.appName === action.payload) 
                return initialState;
            else 
                return state;
            
        case SET_STATE:
            return action.payload.diary;

        default:
            return state;
    }
};