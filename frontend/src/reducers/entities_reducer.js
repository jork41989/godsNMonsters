import { combineReducers } from 'redux';
import timesReducer from './times_reducer'


export default combineReducers({
    times: timesReducer
})
