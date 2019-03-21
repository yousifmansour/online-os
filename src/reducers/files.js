import {LOAD_FILES_FOLDERS_DATA, NAVIGATE_TO_FOLDER, NAVIGATE_BACK} from 'actions/types';
import {CLOSE_APP, SET_STATE} from 'actions/types';

const initialState = {
    appName: 'files',
    currentPath: ['home'],
    data: []
};

export default function files(state = initialState, action) {
    switch (action.type) {
        case LOAD_FILES_FOLDERS_DATA:
            return {
                ...state,
                data: action.payload
            };

        case NAVIGATE_TO_FOLDER:
            return {
                ...state,
                currentPath: [
                    ...state.currentPath,
                    action.payload
                ]
            };

        case NAVIGATE_BACK:
            if (state.currentPath.length > 1) {
                let currentPath = state.currentPath;
                currentPath.pop();
                return {
                    ...state,
                    currentPath
                };
            } else 
                return state;
            
        case CLOSE_APP:
            if (state.appName === action.payload) 
                return initialState;
            else 
                return state;
            
        case SET_STATE:
            return action.payload.files;

        default:
            return state;
    }
};