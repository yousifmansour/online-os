import {SET_PDF_PATH, SET_PDF_SCROLL_POSITION, SCALE_UP_PDF, SCALE_DOWN_PDF} from './types';

export function setPDFScrollPosition(scrollPosition) {
    return {type: SET_PDF_SCROLL_POSITION, payload: scrollPosition};
}

export function setPDFPath(path) {
    return {type: SET_PDF_PATH, payload: path};
}

export function scaleUpPDF() {
    return {type: SCALE_UP_PDF};
}

export function scaleDownPDF() {
    return {type: SCALE_DOWN_PDF};
}
