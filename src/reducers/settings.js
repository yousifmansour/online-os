import {SET_BACKGROUND_IMAGE_INDEX, SET_BACKGROUND_DATA, CLOSE_APP, SET_STATE} from 'actions/types';

const initialState = {
    appName: 'settings',
    backgroundIndex: 0,
    backgrounds: []
}

export default function settings(state = initialState, action) {
    switch (action.type) {
        case SET_BACKGROUND_IMAGE_INDEX:
            return {
                ...state,
                backgroundIndex: action.payload
            };
        case SET_BACKGROUND_DATA:
            return {
                ...state,
                backgrounds: action
                    .payload
                    .map((image) => 'https://www.yousifmansour.space/api/online-os/home/backgrounds/' + encodeURI(image.name))
            }

        case CLOSE_APP:
            if (state.appName === action.payload) {
                return initialState;
            } else 
                return state;
            
        case SET_STATE:
            if (action.payload.settings) 
                return action.payload.settings;
            else 
                return state;
            
        default:
            return state;
    }
}