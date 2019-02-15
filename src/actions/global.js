import {SET_STATE} from 'actions/types';

// asynchornously gets state and calls an action that sets it, updating initial
// redux state
export function getState() {
    return (dispatch) => {
        fetch('https://www.yousifmansour.space/api/online-os/state').then((data) => {
            return data.json();
        }).then((data) => {
            dispatch({type: SET_STATE, payload: data});
        });
    };
}