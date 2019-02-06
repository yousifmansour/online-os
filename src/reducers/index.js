import {combineReducers} from 'redux';
import recentApps from './recentApps';
import calculator from './calculator';
import notes from './notes';
import diary from './diary';

export default combineReducers({recentApps, calculator, notes, diary});