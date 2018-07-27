import { LOAD_TABLE} from '../constants/tables';
import {REQUEST, SUCCESS} from '../constants/api';

const initialState = {
    tables: {},
    fetching: false
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case LOAD_TABLE + REQUEST:
            return { ...state, fetching: true }

        case LOAD_TABLE + SUCCESS:
            return { ...state, tables: {
                    ...state.tables,
                    [action.payload.tableId]: action.response
                },
                fetching: false
            }

        default:
            return state;
    }
}