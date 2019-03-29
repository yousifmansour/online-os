import {combineReducers} from 'redux';
import recentApps from 'reducers/recentApps';
import calculator from 'reducers/calculator';
import notes from 'reducers/notes';
import diary from 'reducers/diary';
import files from 'reducers/files';
import pdfViewer from 'reducers/PDFViewer';

export default combineReducers({
    recentApps,
    calculator,
    notes,
    diary,
    files,
    pdfViewer
});