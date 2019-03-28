import {
    LOAD_FILES_FOLDERS_DATA,
    NAVIGATE_TO_FOLDER,
    NAVIGATE_BACK,
    UPLOAD_PROGRESS,
    STARTED_UPLOAD,
    FINISHED_UPLOAD
} from 'actions/types';
import {CLOSE_APP, SET_STATE} from 'actions/types';

const initialState = {
    appName: 'files',
    currentPath: [],
    data: [],
    uploading: false,
    uploadProgress: 0
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
            
        case STARTED_UPLOAD:
            return {
                ...state,
                uploading: true
            };

        case UPLOAD_PROGRESS:
            if (!state.uploading) 
                return state;
            else 
                return {
                    ...state,
                    uploadProgress: action.payload
                };
            
        case FINISHED_UPLOAD:
            return {
                ...state,
                uploading: false,
                uploadProgress: 0
            };

        case CLOSE_APP:
            if (state.appName === action.payload) 
                return initialState;
            else 
                return state;
            
        case SET_STATE:
            if (action.payload.files) 
                return action.payload.files;
            else 
                return state;
            
        default:
            return state;
    }
};