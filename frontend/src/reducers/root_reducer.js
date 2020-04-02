import { combineReducers } from 'redux';
import errors from './errors_reducer';
import ui from './ui_reducer';
import entities from './entities_reducer';

const RootReducer = combineReducers({
    entities,
    errors,
    ui
});

export default RootReducer;