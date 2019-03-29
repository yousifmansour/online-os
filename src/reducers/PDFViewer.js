import {
    SET_FILE_PATH,
    SET_PDF_SCROLL_POSITION,
    SCALE_UP_PDF,
    SCALE_DOWN_PDF,
    CLOSE_APP,
    SET_STATE
} from 'actions/types';

const initialState = {
    appName: 'pdf-viewer',
    currentFilePath: '/CMPS.pdf',
    scrollPosition: 0,
    scale: 1
};

export default function diary(state = initialState, action) {
    switch (action.type) {
        case SET_PDF_SCROLL_POSITION:
            return {
                ...state,
                scrollPosition: + action.payload
            };

        case SET_FILE_PATH:
            let scrollPosition = state.scrollPosition;
            if (state.currentFilePath !== action.payload) 
                scrollPosition = 0;
            return {
                ...state,
                currentFilePath: action.payload,
                scrollPosition
            };

        case SCALE_UP_PDF:
            return {
                ...state,
                scale: state.scale + 0.1
            };

        case SCALE_DOWN_PDF:
            if (state.scale - 0.1 <= 0) 
                return state;
            return {
                ...state,
                scale: state.scale - 0.1
            };

        case CLOSE_APP:
            if (state.appName === action.payload) 
                return initialState;
            else 
                return state;
            
        case SET_STATE:
            if (action.payload.pdfViewer) 
                return action.payload.pdfViewer;
            else 
                return state;
            
        default:
            return state;
    }
};