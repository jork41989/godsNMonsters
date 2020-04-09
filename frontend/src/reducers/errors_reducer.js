import { combineReducers } from 'redux';
import TimesErrorsReducer from './times_error_reducer';
import ToursErrorsReducer from './tours_error_reducer';


export default combineReducers({
  times: TimesErrorsReducer,
  tours: ToursErrorsReducer
});