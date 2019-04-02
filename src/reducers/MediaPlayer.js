import {
    SET_MEDIA_PATH,
    SET_MEDIA_PLAYING,
    SET_MEDIA_PROGRESS,
    SET_MEDIA_STARTED_TIME,
    SET_MEDIA_SEEKING,
    CLOSE_APP,
    SET_STATE
} from 'actions/types';

const initialState = {
    appName: 'media-player',
    mediaPath: 'http://localhost:5000/home/big_buck_bunny.mp4',
    mediaPlaying: false,
    mediaProgress: 0,
    mediaSeeking: false,
    startedTime: null
};

export default function mediaPlayer(state = initialState, action) {
    switch (action.type) {
        case SET_MEDIA_PATH:
            if (state.mediaPath !== action.payload) {
                return {
                    ...initialState,
                    mediaPath: action.payload
                };
            } else 
                return state;
            
        case SET_MEDIA_SEEKING:
            return {
                ...state,
                mediaSeeking: action.payload
            };

        case SET_MEDIA_PLAYING:
            return {
                ...state,
                mediaPlaying: action.payload
            };

        case SET_MEDIA_PROGRESS:
            return {
                ...state,
                mediaProgress: action.payload
            };

        case SET_MEDIA_STARTED_TIME:
            return {
                ...state,
                startedTime: action.payload
            };

        case CLOSE_APP:
            if (state.appName === action.payload) {
                console.log('yes')
                return initialState;
            } else 
                return state;
            
        case SET_STATE:
            if (action.payload.mediaPlayer) 
                return action.payload.mediaPlayer;
            else 
                return state;
            
        default:
            return state;
    }
};