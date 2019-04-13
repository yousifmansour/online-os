import {combineReducers} from 'redux';
import recentApps from 'reducers/recentApps';
import calculator from 'reducers/calculator';
import notes from 'reducers/notes';
import diary from 'reducers/diary';
import files from 'reducers/files';
import pdfViewer from 'reducers/PDFViewer';
import mediaPlayer from 'reducers/MediaPlayer';
import imageViewer from 'reducers/imageViewer';

export default combineReducers({
    recentApps,
    calculator,
    notes,
    diary,
    files,
    pdfViewer,
    mediaPlayer,
    imageViewer
});