import {LOAD_BY_STRING, LOAD_BY_LETTER} from '../constants/search';
import {GLOBAL_URL} from '../constants/config';

export function loadTablesByString(str) {
    return (dispatch) => {

        dispatch({
            type: LOAD_BY_STRING,
            payload: { str },
            callAPI: `${GLOBAL_URL}/api/search/?query=${str}`
        })
    }
}

export function loadTablesByLetter(letter) {
    return (dispatch, getState) => {

        dispatch({
            type: LOAD_BY_LETTER,
            payload: {letter},
            callAPI: `${GLOBAL_URL}/api/search/?letter=${letter}`
        })
    }
}