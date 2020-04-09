import { RECEIVE_TIMES_ERRORS } from "../actions/times_actions";


const _nullErrors = [];

const TimesErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TIMES_ERRORS:
      
      return action.errors
    default:
      return state
  }

}

export default TimesErrorsReducer;