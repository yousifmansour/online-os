import {SET_STATE} from './types';

// asynchornously gets state and calls an action that sets it, updating initial
// redux state
export function getState() {
    return (dispatch) => {
        fetch('http://localhost:5000/state').then((data) => {
            return data.json();
        }).then((data) => {
            dispatch({type: SET_STATE, payload: data});
        });
    };
}