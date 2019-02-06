import {SET_SCROLL_POSITION} from './types';

export function setScrollPosition(scrollPosition) {
    return {type: SET_SCROLL_POSITION, payload: scrollPosition};
}