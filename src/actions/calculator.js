import {SET_FIRST_NUMBER, SET_SECOND_NUMBER, SET_RESULT} from 'actions/types';

export function setFirstNumber(number) {
    return {type: SET_FIRST_NUMBER, payload: number};
}

export function setSecondNumber(number) {
    return {type: SET_SECOND_NUMBER, payload: number};
}

export function setResult(number) {
    return {type: SET_RESULT, payload: number};
}