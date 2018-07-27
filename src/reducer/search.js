import { LOAD_BY_STRING, LOAD_BY_LETTER } from '../constants/search';
import { REQUEST, SUCCESS, FAIL} from '../constants/api';

const initialState = {
    tableNames: [],
    tablesByLetters: {},
    currentLetter: null,
    fetching: false
}

export default function photos(state = initialState, action) {

    switch (action.type) {
        case LOAD_BY_STRING + REQUEST:
            return { ...state, fetching: true }

        case LOAD_BY_STRING + SUCCESS:
            return { ...state, tableNames: action.response, fetching: false }

        case LOAD_BY_LETTER + REQUEST:
            return { ...state, fetching: true }

        case LOAD_BY_LETTER + SUCCESS:
            return { ...state, currentLetter: action.payload.letter, tablesByLetters: {
                ...state.tablesByLetters,
                [action.payload.letter]: action.response
            },
                fetching: false
            }


        default:
            return state;
    }
}