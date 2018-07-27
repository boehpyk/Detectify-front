import { LOAD_TABLE } from '../constants/tables';
import {GLOBAL_URL} from '../constants/config';

export function loadTableIntoModal(tableId) {

    return (dispatch, getState) => {

        const table = getState().tables[tableId];

        if (table && table.title) return;

        dispatch({
            type: LOAD_TABLE,
            payload: { tableId },
            callAPI: `${GLOBAL_URL}/api/tables/${tableId}/`
        })
    }
}