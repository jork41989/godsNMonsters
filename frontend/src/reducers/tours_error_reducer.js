import { RECEIVE_TOURS_ERRORS } from "../actions/tours_actions";

const _nullErrors = [];

const ToursErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOURS_ERRORS:
      return action.errors
    default:
      return state
  }

}

export default ToursErrorsReducer;