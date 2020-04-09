import { combineReducers } from 'redux';
import timesReducer from './times_reducer'
import toursReducer from './tours_reducer'


export default combineReducers({
    times: timesReducer,
    tours: toursReducer
})
