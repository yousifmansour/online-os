import {SET_IMAGE_PATH, SET_STATE, CLOSE_APP} from 'actions/types';

const initialState = {
    appName: 'image-viewer',
    imagePath: ''
};

export default function imageViewer(state = initialState, action) {
    switch (action.type) {
        case SET_IMAGE_PATH:
            return {
                ...state,
                imagePath: action.payload
            };

        case CLOSE_APP:
            if (state.appName === action.payload) 
                return initialState;
            else 
                return state;
            
        case SET_STATE:
            if (action.payload.imageViewer) 
                return action.payload.imageViewer;
            else 
                return state;
            
        default:
            return state;
    }
};