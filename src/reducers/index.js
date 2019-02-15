import {combineReducers} from 'redux';
import recentApps from 'reducers/recentApps';
import calculator from 'reducers/calculator';
import notes from 'reducers/notes';
import diary from 'reducers/diary';

export default combineReducers({recentApps, calculator, notes, diary});