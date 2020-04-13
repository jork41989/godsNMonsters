import {
  USER_RECEIVED,
  USER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../actions/auth_actions';

const initialState = {
  token: null,
  user: null
};

export default function (state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case USER_RECEIVED:
      return Object.assign({}, state, {
        user: action.payload 
      });

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return Object.assign({}, state, {
        ...action.payload
      });
      
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
}