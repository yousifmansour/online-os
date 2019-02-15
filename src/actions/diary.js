import {SET_SCROLL_POSITION, SET_CURRENT_WEEK} from 'actions/types';

export function setScrollPosition(scrollPosition) {
    return {type: SET_SCROLL_POSITION, payload: scrollPosition};
}

export function setCurrentWeek(week) {
    return {type: SET_CURRENT_WEEK, payload: week};
}