import { combineReducers } from 'redux';

const testReducer = function(state=[], action) {
    switch(action.type) {
        case 'MERGE':
        console.log('Merge si merge foarte bine din reducer');
        console.log('HA HA HA HA');
        return state;
        default:
        return state;
    }
}

export default combineReducers({testReducer});