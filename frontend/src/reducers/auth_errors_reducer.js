import {
  USER_ERROR,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from '../actions/auth_actions';


const _nullErrors = [];


const authErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type){
    case USER_ERROR:
      return action.payload;
    case LOGIN_ERROR:
      return action.payload;
    case REGISTER_ERROR:
      return action.payload;
    default:
      return state;
  }

}

export default authErrorsReducer