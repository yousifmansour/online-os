import {combineReducers} from 'redux';
import recentApps from './recentApps';
import calculator from './calculator';
import notes from './notes';

export default combineReducers({recentApps, calculator, notes});