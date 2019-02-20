import {SET_TOTAL, SET_NEXT, SET_OPERATION} from 'actions/types';

export function setTotal(total) {
    return {type: SET_TOTAL, payload: total}
};

export function setNext(next) {
    return {type: SET_NEXT, payload: next};
}

export function setOperation(operation) {
    return {type: SET_OPERATION, payload: operation};
}