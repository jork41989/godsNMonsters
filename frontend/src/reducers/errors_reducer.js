import { combineReducers } from 'redux';
import TimesErrorsReducer from './times_error_reducer';


export default combineReducers({
  times: TimesErrorsReducer,
});