import { combineReducers } from 'redux';
import TimesErrorsReducer from './times_error_reducer';
import ToursErrorsReducer from './tours_error_reducer';
import authErrorsReducer from './auth_errors_reducer'


export default combineReducers({
  times: TimesErrorsReducer,
  tours: ToursErrorsReducer,
  auth: authErrorsReducer
});