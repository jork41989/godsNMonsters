import axios from 'axios';

export const RECEIVING_USER = 'RECEIVING_USER';
export const USER_RECEIVED = 'USER_RECEIVED';
export const USER_ERROR = 'USER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const receiveUser = payload => ({
  type: USER_RECEIVED,
  payload
});

const userError = payload => ({
  type: USER_ERROR,
  payload
});

const receiveLogin = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

const loginError = payload => ({
  type: LOGIN_ERROR,
  payload
});

const receiveRegister = payload => ({
  type: REGISTER_SUCCESS,
  payload
});

const registerError = payload => ({
  type: REGISTER_ERROR,
  payload
});

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const fetchUser = () => async (dispatch, getState) => {
  dispatch({ type: RECEIVING_USER });

  try {
    const res = await axios.get('http://localhost:8000/api/auth/user', tokenConfig(getState));
    dispatch(receiveUser(res.data));
  } catch (err) {
      const error = err.response ? err.response.data : err.message;
      dispatch(userError(error));
  }

};

export const register = user => async dispatch => {

  try {
    const res = await axios.post('http://localhost:8000/api/auth/register', user, config);
    dispatch(receiveRegister(res.data));
  } catch (err) {
      const error = err.response ? err.response.data : err.message;
      dispatch(registerError(error));
  }

};

export const login = user => async dispatch => {

  try {
    const res = await axios.post('http://localhost:8000/api/auth/login', user, config);
    dispatch(receiveLogin(res.data));
  } catch (err) {
      const error = err.response ? err.response.data : err.message;
      dispatch(loginError(error));
  }

};

export const logout = () => async (dispatch, getState) => {
  await axios.post('http://localhost:8000/api/auth/logout', null, tokenConfig(getState));
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

export const tokenConfig = getState => {
  
  const token = getState().auth.token;

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};