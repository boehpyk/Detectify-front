import {combineReducers} from 'redux';
import modals from './modals';
import search from './search';
import tables from './tables';

export default combineReducers({
    modals, search, tables
})