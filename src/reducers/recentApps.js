import {ADD_APP, CLOSE_APP, SET_STATE} from 'actions/types';

const initialState = [];

export default function recentApps(state = initialState, action) {
    switch (action.type) {
        case ADD_APP:
            // add running apps only once
            if (!state.includes(action.payload)) 
                return [
                    ...state,
                    action.payload
                ];
            else 
                return state;
            
        case CLOSE_APP:
            return [...state].filter((app) => app !== action.payload);

        case SET_STATE:
            if (action.payload.recentApps) 
                return action.payload.recentApps;
            else 
                return state;
            
        default:
            return state;
    }
};